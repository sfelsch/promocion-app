import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-confirmacion',
  standalone: true,
  imports: [CommonModule], // Agregar CommonModule si el componente es standalone
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent {
  @Input() mensaje: string = '';
  @Output() confirmar: EventEmitter<boolean> = new EventEmitter();

  confirmarAccion(confirmado: boolean): void {
    this.confirmar.emit(confirmado);
  }
}
