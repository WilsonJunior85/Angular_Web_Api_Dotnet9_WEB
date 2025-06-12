import { Component } from '@angular/core';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';
import { UsuarioCriacaoDto } from '../../models/usuarioCriacaoDtoModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutenticacaoService } from '../../services/autenticacao.service';

@Component({
  selector: 'app-cadastrar',
  imports: [FormularioComponent],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar Usuários";


  constructor(
    private router: Router,
    private toastr: ToastrService,
    private autenticacaoService: AutenticacaoService,

  ) {

  }


  criarUsuario(usuario: UsuarioCriacaoDto) {
    this.autenticacaoService.RegistrarUsuario(usuario).subscribe(result => {
      if (result.data != null) {
        this.toastr.success(result.mensagem, `Usuário ${usuario.nome} cadastrado com sucesso`);
        this.router.navigate(['/']);
      } else {
        this.toastr.error(result.mensagem, 'Erro!');
      }
    })

  }


}
