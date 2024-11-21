import { Injectable } from '@angular/core';
import { listaPromociones } from '../data/listaPromociones';

@Injectable({
  providedIn: 'root',
})
export class ActualizarPromocionesService {
  actualizarPromocion(promocion: any): Promise<{ success: boolean }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = listaPromociones.findIndex((p) => p._id === promocion._id);
        if (index !== -1) {
          listaPromociones[index] = promocion;
          resolve({ success: true });
        } else {
          reject({ success: false, message: 'Promoción no encontrada' });
        }
      }, 2);
    });
  }
}
