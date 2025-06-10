import { Component } from '@angular/core';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';

@Component({
  selector: 'app-cadastrar',
  imports: [FormularioComponent],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar Usuários";
}
