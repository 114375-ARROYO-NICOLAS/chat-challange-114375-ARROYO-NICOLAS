import { Component } from '@angular/core';
import { MensajeComponent } from "../mensaje/mensaje.component";

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  // @Input() mensaje = '';
  // conversacion:string[] = [];

  // recibirMensaje(event : any){
  //   this.conversacion.push(event.target.value);
  // }

  usuario1='María'
  usuario2='Pepe'
  mensajes: { usuario: string; texto: string }[] = [];
  agregarMensaje(mensaje: { usuario: string; texto: string }) {
    this.mensajes.push(mensaje);
  }

}
