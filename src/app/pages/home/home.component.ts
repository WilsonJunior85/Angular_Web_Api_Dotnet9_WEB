import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuarioModel';
import { ToastrService } from 'ngx-toastr';
import { AuditoriaService } from '../../services/auditoria.service';
import * as XLSX from 'xlsx';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  usuariosGeral: UsuarioModel[] = [];
  form: any;


  constructor
    (
      private usuarioService: UsuarioService,
      private toastrService: ToastrService,
      private auditoriaService: AuditoriaService,

    ) {

  }

  ngOnInit(): void {
    this.usuarioService.BuscarUsuarios().subscribe(result => {
      console.log(result);
      this.usuarios = result.data;
      this.usuariosGeral = result.data;
    })
  }



  RemoverUsuarios(id: number) {
    this.usuarioService.RemoverUsuarios(id).subscribe(result => {
      if (result.data != null) {
        this.toastrService.success(result.mensagem, "Sucesso!")
        //Filtrando e pegando todos os usuários na lista de usuário porem não vai pegar o que foi excluido
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id)
        // window.location.reload();
      } else {
        this.toastrService.error(result.mensagem, "Error!")
      }

    })
  }


  Pesquisar(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.usuarios = this.usuariosGeral.filter(usuario => {
      return usuario.nome.toLowerCase().includes(value);
    })
  }



  BuscarAuditorias() {
    this.auditoriaService.BuscarAuditorias().subscribe(result => {
      if (result.length > 0) {
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(result); // CONVERTENDO OS DADOS PARA A PLANILHA
        const wb: XLSX.WorkBook = XLSX.utils.book_new();             //  CRIANDO UM NOVO LIVRO DE TRABALHO OU UMA NOVA ABA NA PLANILHA
        XLSX.utils.book_append_sheet(wb, ws, "Planilha de dados");  // PEGANDO AMBOS OS DADOS E DANDO O NOME A PLANILHA
        XLSX.writeFile(wb, 'dados.xlsx');                          //  GERAR E BAIXAR O ARQUIVO
      } else {
        this.toastrService.error("Não existe auditorias cadastradas!", "Error!")
      }
    })
  }


}




// BuscarUsuarios() {
//   this.usuarioService.BuscarUsuarios().subscribe(result => {
//     console.log(result);
//     this.usuarios = result.data;
//     this.usuariosGeral = result.data;
//   })
// }
// }
