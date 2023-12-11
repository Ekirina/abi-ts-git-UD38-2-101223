import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-contacto.component.html',
  styleUrl: './form-contacto.component.css'
})
export class FormContactoComponent {
  @Input() listaContactos: any = [];
  constructor(){}
}
