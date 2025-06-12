import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuarioModel';
import { CommonModule } from '@angular/common';
import { UsuarioEdicaoDtoModel } from '../../models/usuarioEdicaoDtoModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar',
  imports: [FormularioComponent,
    CommonModule
  ],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  btnAcao = "Editar";
  descTitulo = "Editar Usuários";
  usuario!: UsuarioModel;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,


  ) {

  }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.usuarioService.BuscarUsuarioPorId(id).subscribe(result => {
      this.usuario = result.data;
    })
  }

  EditarUsuario(usuario: UsuarioEdicaoDtoModel) {
    // debugger;
    this.usuarioService.EditarUsuario(usuario).subscribe(result => {
      if (result.data != null) {
        this.toastr.success(result.mensagem, 'Sucesso');
        this.router.navigate(['/']);
      } else {
        this.toastr.success(result.mensagem, 'Erro!');
      }
    })
  }

}
