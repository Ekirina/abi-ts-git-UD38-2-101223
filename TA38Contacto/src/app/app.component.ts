import { Component } from '@angular/core';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [FormsModule, FormContactoComponent],
})  

export class AppComponent {
  title = 'TA38Contacto';

  nombre:string = '';
  email:string = '';
  mensaje:string = '';
  respuesta:string = '';
  contactos: any = [];
    

    enviar(){
      this.contactos.push({
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje,
        respuesta: this.respuesta
      });
      this.nombre = '';
      this.email = '';
      this.mensaje = '';
      this.respuesta = '';
      console.log(this.contactos)
    }
}