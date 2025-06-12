import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioCriacaoDto } from '../../models/usuarioCriacaoDtoModel';
import { UsuarioEdicaoDtoModel } from '../../models/usuarioEdicaoDtoModel';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  @Input() btnAcao!: string;
  @Input() descTitulo!: string;
  @Input() dadosUsuario: UsuarioCriacaoDto | UsuarioEdicaoDtoModel | null = null;
  @Output() onSubmit = new EventEmitter();


  usuarioForm!: FormGroup;


  ngOnInit(): void {
    // this.usuarioForm = new FormGroup({
    //   id: new FormControl(this.dadosUsuario && 'id' in this.dadosUsuario ? this.dadosUsuario.id : 0),
    //   nome: new FormControl(this.dadosUsuario ? this.dadosUsuario.nome : '', [Validators.required]),
    //   sobrenome: new FormControl(this.dadosUsuario ? this.dadosUsuario.sobrenome : '', [Validators.required]),
    //   email: new FormControl(this.dadosUsuario ? this.dadosUsuario.email : '', [Validators.required, Validators.email]),
    //   usuario: new FormControl(this.dadosUsuario ? this.dadosUsuario.usuario : '', [Validators.required]),
    // })
    this.inicializarFormulario();


  }


  private inicializarFormulario(): void {
    const isCadastro = this.btnAcao === "Cadastrar";

    this.usuarioForm = new FormGroup({
      id: new FormControl(this.dadosUsuario && 'id' in this.dadosUsuario ? this.dadosUsuario.id : 0),
      nome: new FormControl(this.dadosUsuario ? this.dadosUsuario.nome : '', [Validators.required]),
      sobrenome: new FormControl(this.dadosUsuario ? this.dadosUsuario.sobrenome : '', [Validators.required]),
      email: new FormControl(this.dadosUsuario ? this.dadosUsuario.email : '', [Validators.required, Validators.email]),
      usuario: new FormControl(this.dadosUsuario ? this.dadosUsuario.usuario : '', [Validators.required]),
      senha: new FormControl(this.dadosUsuario && 'senha' in this.dadosUsuario ? this.dadosUsuario.senha : '',
        isCadastro ? Validators.required : []
      ),
      confirmaSenha: new FormControl(this.dadosUsuario && 'confirmaSenha' in this.dadosUsuario ? this.dadosUsuario.confirmaSenha : '',
        isCadastro ? Validators.required : []
      )

    });

  }


  submit(): void {
    if (this.usuarioForm.valid) {
      if (this.dadosUsuario && (this.dadosUsuario as UsuarioEdicaoDtoModel).id) {
        this.onSubmit.emit(this.usuarioForm.value as UsuarioEdicaoDtoModel)
      } else {
        this.onSubmit.emit(this.usuarioForm.value as UsuarioCriacaoDto)
      }
    } else {
      this.usuarioForm.markAllAsTouched();  // Marca todos como required se caso nao preencher todos os campos
    }
  }





}
