// modal-promocion.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Promociones } from '../../modelos/promociones';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-promocion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-promocion.component.html',
  styleUrls: ['./modal-promocion.component.css'],
})
export class ModalPromocionComponent {
  @Input() promocion: Promociones = this.crearNuevaPromocion();
  @Input() esEdicion: boolean = false;
  @Output() guardar = new EventEmitter<Promociones>();
  @Output() cerrar = new EventEmitter<void>();

  // Propiedad para controlar la visibilidad del modal
  @Input() mostrarModal: boolean = false;

  // Método para crear una promoción vacía
  crearNuevaPromocion(): Promociones {
    return {
      _id: '',
      nombre: '',
      descripcion: '',
      descuento: 0,
      fechaInicio: '',
      fechaFin: '',
    };
  }

  // Emitir evento de guardar
  guardarCambios(): void {
    this.guardar.emit(this.promocion);
  }

  // Emitir evento de cerrar
  cerrarModal(): void {
    this.cerrar.emit();
  }
}
