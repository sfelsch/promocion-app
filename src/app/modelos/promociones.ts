// promociones.ts (o el archivo donde esté definida la clase Promociones)

export class Promociones {
  _id: string;
  nombre: string;
  descripcion: string;
  descuento: number;
  fechaInicio: string;
  fechaFin: string;

  constructor(
    _id: string,
    nombre: string,
    descripcion: string,
    descuento: number,
    fechaInicio: string,
    fechaFin: string
  ) {
    this._id = _id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.descuento = descuento;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
  }
}
