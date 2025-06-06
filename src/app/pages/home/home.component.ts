import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuarioModel';


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
      private usuarioService: UsuarioService
    ) {

  }

  ngOnInit(): void {

  }


  BuscarUsuarios() {
    this.usuarioService.BuscarUsuarios().subscribe(result => {
      console.log(result);
      this.usuarios = result.data;
      this.usuariosGeral = result.data;
    })
  }
}
