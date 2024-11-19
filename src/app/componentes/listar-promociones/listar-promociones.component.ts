import { Component, OnInit } from '@angular/core';
import { Promociones } from '../../modelos/promociones';  // Asegúrate de que Promociones esté importado
import { ObtenerTodasLasPromocionesService } from './../../services/obtener-todas-las-promociones.service';
import { CommonModule } from '@angular/common';  // Importa CommonModule aquí

@Component({
  selector: 'app-listar-promociones',
  standalone: true,  // Establece el componente como standalone
  imports: [CommonModule],  // Aquí declaramos CommonModule para que funcione ngFor
  templateUrl: './listar-promociones.component.html',
  styleUrls: ['./listar-promociones.component.css']
})
export class ListarPromocionesComponent implements OnInit {
  listaPromociones: Promociones[] = [];

  constructor(
    private obtenerTodasLasPromociones: ObtenerTodasLasPromocionesService
  ) {}

  ngOnInit() {
    const promise = this.obtenerTodasLasPromociones.obtenerTodasLasPromociones();
    promise.then(
      response => {
        console.log('Respuesta del servicio:', response); // Verifica la respuesta
        this.listaPromociones = response.res;  // Asignamos directamente las promociones
      },
      error => {
        console.log('Error ' + error);
      }
    );
  }

  actualizarPromocion(promocion: Promociones): void {
    console.log('Actualizar promoción ' + JSON.stringify(promocion));
    // Lógica para actualizar la promoción
  }

  eliminarPromocion(id: string): void {
    console.log('Eliminar promoción ' + id);
    // Lógica para eliminar la promoción
  }

  verPromocion(id: string): void {
    console.log('Ver detalles de promoción ' + id);
    // Lógica para navegar a los detalles de la promoción
  }
}
