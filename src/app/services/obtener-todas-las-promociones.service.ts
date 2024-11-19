import { Injectable } from '@angular/core';
import { listaPromociones } from "../data/listaPromociones";  // Asegúrate de que el archivo esté bien importado
import { Promociones } from "../modelos/promociones";

@Injectable({
  providedIn: 'root',
})
export class ObtenerTodasLasPromocionesService {

  // Este método obtiene las promociones de la lista
  obtenerTodasLasPromociones(): Promise<{ res: Promociones[] }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const promociones: Promociones[] = listaPromociones;  // Usamos la lista de promociones definida en data/listaPromociones
        resolve({ res: promociones });
      }, 2000);  // Simulamos un retraso de 2 segundos, como si fuera una llamada HTTP
    });
  }
}
