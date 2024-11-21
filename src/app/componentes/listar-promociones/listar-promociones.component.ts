import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Promociones } from '../../modelos/promociones';
import { Negocios } from '../../modelos/negocios';
import { Redes } from '../../modelos/redes';
import { listaNegocios } from '../../data/listaNegocios';
import { listaRedes } from '../../data/listaRedes';
import { PaginacionService } from '../../services/paginacion';
import { ObtenerTodasLasPromocionesService } from './../../services/obtener-todas-las-promociones.service';
import { ModalPromocionComponent } from '../modal-promocion/modal-promocion.component';
import { ModalConfirmacionComponent } from '../../modal-confirmacion/modal-confirmacion.component';
import { EliminarPromocionesService } from '../../services/eliminar-promociones.service';
import { ActualizarPromocionesService } from '../../services/actualizar-promociones.service';

@Component({
  selector: 'app-listar-promociones',
  standalone: true,
  imports: [CommonModule, ModalPromocionComponent, ModalConfirmacionComponent],
  templateUrl: './listar-promociones.component.html',
  styleUrls: ['./listar-promociones.component.css'],
})
export class ListarPromocionesComponent implements OnInit {
  listaPromociones: Promociones[] = [];
  listaNegocios: Negocios[] = listaNegocios;
  promocionesPaginadas: Promociones[] = [];
  promocionSeleccionada: Promociones = this.crearNuevaPromocion();
  mostrarModal: boolean = false;
  esEdicion: boolean = false;
  mostrarModalConfirmacion: boolean = false;
  promocionAEliminarId: string | null = null;
  listaRedes: Redes[] = listaRedes;

  constructor(
    private obtenerTodasLasPromociones: ObtenerTodasLasPromocionesService,
    private paginacionService: PaginacionService,
    private eliminarPromocionesService: EliminarPromocionesService,
    private actualizarPromocionesService: ActualizarPromocionesService
  ) {}

  ngOnInit() {
    const promise = this.obtenerTodasLasPromociones.obtenerTodasLasPromociones();
    promise.then(
      (response) => {
        this.listaPromociones = response.res;
        this.calcularPaginas();
    this.actualizarPromocionesPaginadas();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

//obtener redes y negocios
  obtenerNombreNegocio(id_negocios: string): string {
    const negocio = this.listaNegocios.find((n) => n.id_negocios === id_negocios);
    return negocio ? negocio.neg_nombre : 'Sin negocio asociado';
  }
  obtenerNombreRed(id_negocios: string): string {
    const negocio = this.listaNegocios.find((n) => n.id_negocios === id_negocios);
    if (negocio && negocio.id_redes) {
      const red = this.listaRedes.find((r) => r.id_redes === negocio.id_redes);
      return red ? red.red_nombre : 'Sin red asociada';
    }
    return 'Sin red asociada';
  }

//paginacion
  paginaActual: number = 1;
  promocionesPorPagina: number = 6;
  paginas: number[] = [];

  calcularPaginas(): void {
    this.paginas = this.paginacionService.calcularPaginas(this.listaPromociones.length, this.promocionesPorPagina);
  }
  actualizarPromocionesPaginadas(): void {
    this.promocionesPaginadas = this.paginacionService.obtenerPaginas(
      this.listaPromociones,
      this.paginaActual,
      this.promocionesPorPagina
    );
  }
  cambiarPagina(pagina: number): void {
    if (pagina < 1 || pagina > this.paginas.length) return;
    this.paginaActual = pagina;
    this.actualizarPromocionesPaginadas();
  }

  //actualizar y guardar modificacion
  crearNuevaPromocion(): Promociones {
    return {
      _id: '',
      nombre: '',
      descripcion: '',
      descuento: 0,
      fechaInicio: '',
      fechaFin: '',
      id_negocios: '',
      estado: '',
    };
  }

  guardarPromocion(promocion: Promociones): void {
    if (this.esEdicion) {
      // Actualización de promoción existente
      const index = this.listaPromociones.findIndex((p) => p._id === promocion._id);
      if (index !== -1) {
        this.listaPromociones[index] = promocion;
        this.calcularPaginas();
        this.actualizarPromocionesPaginadas();
      }
    } else {
      // Creación de nueva promoción
      const nuevoId = (this.listaPromociones.length + 1).toString(); // ID basado en la cantidad de elementos
      promocion._id = nuevoId;
      this.listaPromociones.push(promocion); // Agregar la nueva promoción a la lista
      this.calcularPaginas();
      this.actualizarPromocionesPaginadas();
    }
    this.cerrarModal();
  }
  
  

//delete
prepararEliminacion(id: string): void {
  this.promocionAEliminarId = id;
  this.mostrarModalConfirmacion = true;
}

confirmarEliminacion(confirmado: boolean): void {
  if (confirmado && this.promocionAEliminarId) {
    this.eliminarPromocionesService.eliminarPromocion(this.promocionAEliminarId)
      .then(() => {
        this.listaPromociones = this.listaPromociones.filter((p) => p._id !== this.promocionAEliminarId);
        this.calcularPaginas();
        this.actualizarPromocionesPaginadas();
      })
      .catch((error) => {
        console.error('Error eliminando la promoción:', error);
      });
  }
  this.mostrarModalConfirmacion = false;
}


  //modal
  abrirModal(promocion?: Promociones): void {
    this.promocionSeleccionada = promocion ? { ...promocion } : this.crearNuevaPromocion();
    this.esEdicion = !!promocion;
    this.mostrarModal = true;
  }
  abrirModalParaNuevaPromocion(): void {
    this.promocionSeleccionada = this.crearNuevaPromocion();
    this.esEdicion = false;
    this.mostrarModal = true;
  }
  cerrarModal(): void {
    this.mostrarModal = false;
    this.promocionSeleccionada = this.crearNuevaPromocion();
  }
}
