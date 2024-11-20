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
    this.guardar.emit(this.promocion);
  }

  cerrarModal(): void {
    this.cerrar.emit();
  }

  // Método para manejar el cambio de selección de red
  onRedSeleccionada(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    console.log('Red seleccionada ID:', selectedId);

    // Filtrar negocios por id_redes
    this.negociosFiltrados = this.listaNegocios.filter(
      (negocio) => negocio.id_redes === selectedId
    );

    // Limpiar el negocio seleccionado si cambia la red
    this.promocion.id_negocios = '';
  }
}
