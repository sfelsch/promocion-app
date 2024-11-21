import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Promociones } from '../../modelos/promociones';
import { Redes } from '../../modelos/redes';
import { Negocios} from '../../modelos/negocios';
import { listaRedes } from '../../data/listaRedes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { listaNegocios } from '../../data/listaNegocios';
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

  @Input() mostrarModal: boolean = false;

  listaRedes: Redes[] = listaRedes;
  listaNegocios: Negocios[] = listaNegocios;
  negociosFiltrados: Negocios[] = [];

  crearNuevaPromocion(): Promociones {
    return {
      _id: '',
      nombre: '',
      descripcion: '',
      descuento: 0,
      fechaInicio: '',
      fechaFin: '',
      id_negocios: '',
      estado:'',
    };
  }

  guardarCambios(): void {
    const hoy = new Date();
    const fechaInicio = new Date(this.promocion.fechaInicio);
    const fechaFin = new Date(this.promocion.fechaFin);
  
// Validacion
    if (this.promocion.descripcion.length > 30) {
      alert('La descripción no puede tener más de 30 caracteres.');
      return;
    }
    if (!this.promocion.nombre || !this.promocion.descripcion || !this.promocion.estado ||
        !this.promocion.descuento || !this.promocion.fechaInicio || !this.promocion.fechaFin ||
        !this.promocion.id_negocios) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    if (this.promocion.descuento < 0) {
      alert('El descuento no puede ser negativo.');
      return;
    }
    if (fechaInicio < hoy) {
      alert('La fecha de inicio no puede ser anterior al día de hoy.');
      return;
    }
    if (fechaFin <= fechaInicio) {
      alert('La fecha de fin debe ser mayor a la fecha de inicio.');
      return;
    }
  
    this.guardar.emit(this.promocion);
  }
  

  cerrarModal(): void {
    this.cerrar.emit();
  }


  onRedSeleccionada(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    console.log('Red seleccionada ID:', selectedId);
    this.negociosFiltrados = this.listaNegocios.filter(
      (negocio) => negocio.id_redes === selectedId
    );
    this.promocion.id_negocios = '';
  }
}
