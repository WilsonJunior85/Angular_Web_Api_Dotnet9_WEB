import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Input() btnAcao!: string;
  @Input() descTitulo!: string;
}
