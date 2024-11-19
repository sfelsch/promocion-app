import { Promociones } from "../modelos/promociones";

export const listaPromociones: Promociones[] = [
  {
    _id: "1",                  // Cambié id_promociones a _id
    nombre: "Promoción A",     // Cambié pro_nombre a nombre
    descripcion: "Descripción de Promoción A",  // Asigna descripción según sea necesario
    descuento: 100,            // Cambié pro_valor a descuento
    fechaInicio: "2024-01-01",  // Cambié pro_fecha_desde a fechaInicio (como string)
    fechaFin: "2024-01-31",    // Cambié pro_fecha_hasta a fechaFin (como string)
  },
  {
    _id: "2",
    nombre: "Promoción B",
    descripcion: "Descripción de Promoción B",
    descuento: 150,
    fechaInicio: "2024-02-01",
    fechaFin: "2024-02-28",
  },
  {
    _id: "3",
    nombre: "Promoción C",
    descripcion: "Descripción de Promoción C",
    descuento: 200,
    fechaInicio: "2024-03-01",
    fechaFin: "2024-03-31",
  }
];
