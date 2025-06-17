import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { UsuarioModel } from '../../models/usuarioModel';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  usuario!: UsuarioModel;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,

  ) {

  }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   senha: ['', [Validators.required]]
    // })
    this.CarregarGormularioLogin();
  }


  CarregarGormularioLogin() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
  }

  login() {
    this.autenticacaoService.LoginUsuario(this.loginForm.value).subscribe(result => {
      if (result.data != null) {
        // localStorage.setItem('token', result.data.token)
        localStorage.setItem('token', result.data.token)
        this.toastr.success(result.mensagem, `Usuário logado com sucesso`);
        this.router.navigate(['/']);
      } else {
        this.toastr.error(result.mensagem, 'Erro!');
      }
    })
  }

}
