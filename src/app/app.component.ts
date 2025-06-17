import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutenticacaoService } from '../../src/app/services/autenticacao.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularWeb';

  constructor(
    private autenticacaoService: AutenticacaoService,

  ) {

  }


  ngOnInit(): void {

  }


  isAuth() {
    return localStorage.getItem('token') != undefined ? true : false;
  }


  Sair() {
    this.autenticacaoService.Sair();
  }

}
