import { Injectable } from '@angular/core';
import { listaPromociones } from '../data/listaPromociones';

@Injectable({
  providedIn: 'root',
})
export class EliminarPromocionesService {
  eliminarPromocion(id: string): Promise<{ success: boolean }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = listaPromociones.findIndex((p) => p._id === id);
        if (index !== -1) {
          listaPromociones.splice(index, 1);
          resolve({ success: true });
        } else {
          reject({ success: false, message: 'Promoción no encontrada' });
        }
      }, 2);
    });
  }
}
