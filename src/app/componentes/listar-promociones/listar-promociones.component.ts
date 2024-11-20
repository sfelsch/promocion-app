import { Component, OnInit } from '@angular/core';
import { Promociones } from '../../modelos/promociones';
import { ObtenerTodasLasPromocionesService } from './../../services/obtener-todas-las-promociones.service';
import { ModalPromocionComponent } from '../modal-promocion/modal-promocion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-promociones',
  standalone: true,
  imports: [CommonModule, ModalPromocionComponent],
  templateUrl: './listar-promociones.component.html',
  styleUrls: ['./listar-promociones.component.css'],
})
export class ListarPromocionesComponent implements OnInit {
  listaPromociones: Promociones[] = [];
  promocionSeleccionada: Promociones = this.crearNuevaPromocion(); // Crear una promoción vacía
  mostrarModal: boolean = false;
  esEdicion: boolean = false;

  constructor(
    private obtenerTodasLasPromociones: ObtenerTodasLasPromocionesService
  ) {}

  ngOnInit() {
    const promise = this.obtenerTodasLasPromociones.obtenerTodasLasPromociones();
    promise.then(
      response => {
        console.log('Respuesta del servicio:', response);
        this.listaPromociones = response.res;
      },
      error => {
        console.log('Error ' + error);
      }
    );
  }

  // Función para crear una nueva promoción
  crearNuevaPromocion(): Promociones {
    return {
      _id: '',
      nombre: '',
      descripcion: '',
      descuento: 0,
      fechaInicio: '',
      fechaFin: '',
      id_negocios:'',
    };
  }

  abrirModal(promocion?: Promociones): void {
    console.log('Abrir Modal con promoción:', promocion);  // Verifica si se está ejecutando esta función y si recibes la promoción correcta.
    this.promocionSeleccionada = promocion ? { ...promocion } : this.crearNuevaPromocion();
    this.esEdicion = !!promocion;
    this.mostrarModal = true;  // Establecer mostrarModal a true para mostrar el modal
    console.log('mostrarModal:', this.mostrarModal);  // Verifica que mostrarModal esté en true
  }
  

  guardarPromocion(promocion: Promociones): void {
    if (this.esEdicion) {
      const index = this.listaPromociones.findIndex(p => p._id === promocion._id);
      if (index !== -1) {
        this.listaPromociones[index] = promocion;
      }
    } else {
      promocion._id = String(Date.now());
      this.listaPromociones.push(promocion);
    }
    this.cerrarModal();
  }

  eliminarPromocion(id: string): void {
    console.log('Eliminar promoción ' + id);
    // Lógica para eliminar la promoción
  }

  verPromocion(id: string): void {
    console.log('Ver detalles de promoción ' + id);
    // Lógica para navegar a los detalles de la promoción
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.promocionSeleccionada = this.crearNuevaPromocion(); // Restablecer la promoción al cerrar el modal
  }
}
