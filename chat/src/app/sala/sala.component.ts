import { Component, Input, input } from '@angular/core';
import { MensajeComponent } from "../mensaje/mensaje.component";

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  @Input() mensaje = '';
  conversacion:string[] = [];

  recibirMensaje(event : any){
    this.conversacion.push(event.target.value);
  }

}
