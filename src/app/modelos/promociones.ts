
export class Promociones {
  _id: string;
  nombre: string;
  descripcion: string;
  descuento: number;
  fechaInicio: string;
  fechaFin: string;
  id_negocios: string;
  estado: string;

  constructor(
    _id: string,
    nombre: string,
    descripcion: string,
    descuento: number,
    fechaInicio: string,
    fechaFin: string,
    id_negocios: string,
    estado: string
  ) {
    this._id = _id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.descuento = descuento;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.id_negocios=id_negocios;
    this.estado=estado;
  }
}
