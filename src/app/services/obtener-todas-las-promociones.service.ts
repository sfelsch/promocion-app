import { Injectable } from '@angular/core';
import { listaPromociones } from "../data/listaPromociones";
import { Promociones } from "../modelos/promociones";

@Injectable({
  providedIn: 'root',
})
export class ObtenerTodasLasPromocionesService {


  obtenerTodasLasPromociones(): Promise<{ res: Promociones[] }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const promociones: Promociones[] = listaPromociones;
        resolve({ res: promociones });
      }, 2);
    });
  }
}
