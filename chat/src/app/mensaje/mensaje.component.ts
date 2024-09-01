import { Component, EventEmitter, Output , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {
  // @Output() mensaje = new EventEmitter<string>();
  // msjPepe: string = '';
  // msjMaria: string = '';


  // emitirMensajePepe(){
  //   this.mensaje.emit('Pepe' + ': ' + this.msjPepe);
  // }

  // emitirMensajeMaria(){
  //   this.mensaje.emit('Maria' + ': ' + this.msjMaria);
  // }

  @Input() usuario!: string;
  @Output() mensajeEnviado = new EventEmitter<{
    usuario: string;
    texto: string;
  }>();

  mensaje: string = '';

  enviarMensaje() {
    if (this.mensaje.trim()) {
      this.mensajeEnviado.emit({ usuario: this.usuario, texto: this.mensaje });
      this.mensaje = '';
    }
  }
}
