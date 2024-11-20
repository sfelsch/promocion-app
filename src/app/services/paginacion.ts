import { Injectable } from '@angular/core';
import { Promociones } from '../modelos/promociones';

@Injectable({
  providedIn: 'root'
})
export class PaginacionService {

  constructor() { }

  calcularPaginas(totalItems: number, itemsPorPagina: number): number[] {
    const totalPaginas = Math.ceil(totalItems / itemsPorPagina);
    return Array.from({ length: totalPaginas }, (_, i) => i + 1);
  }

  obtenerPaginas(items: Promociones[], paginaActual: number, itemsPorPagina: number): Promociones[] {
    const inicio = (paginaActual - 1) * itemsPorPagina;
    const fin = inicio + itemsPorPagina;
    return items.slice(inicio, fin);
  }
}
