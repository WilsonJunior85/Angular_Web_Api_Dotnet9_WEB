import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuarioModel';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  imports: [],
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
      private toastrService: ToastrService
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


}




// BuscarUsuarios() {
//   this.usuarioService.BuscarUsuarios().subscribe(result => {
//     console.log(result);
//     this.usuarios = result.data;
//     this.usuariosGeral = result.data;
//   })
// }
// }
