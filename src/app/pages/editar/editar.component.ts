import { Component } from '@angular/core';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';

@Component({
  selector: 'app-editar',
  imports: [FormularioComponent],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  btnAcao = "Editar";
  descTitulo = "Editar Usuários";
}
