# Formulario de Promociones en Angular

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de un formulario en Angular para gestionar promociones (CRUD) utilizando una estructura modular, buenas prácticas de desarrollo y simulando la comunicación con un backend mediante fake endpoints. Se implementaron todas las funcionalidades solicitadas, incluyendo validaciones, relaciones entre entidades y un diseño intuitivo basado en **Bootstrap**.

---

## Solución Técnica

### Funcionalidades Implementadas

#### CRUD Completo para Promociones:
- **Crear**: Permite agregar nuevas promociones ingresando los datos requeridos.
- **Leer**: Muestra una lista de promociones existentes.
- **Actualizar**: Permite editar los datos de una promoción seleccionada.
- **Eliminar**: Permite borrar promociones existentes.

#### Validaciones de Formularios:
- Validación de campos obligatorios:  
  `Nombre`, `Fecha de Inicio`, `Fecha Fin`, `Valor`, `Estado` y `Negocio`.
- Validaciones específicas:
  - Fechas coherentes: **Fecha de Fin** debe ser mayor a **Fecha de Inicio**.
  - Valores positivos para el descuento.

#### Relaciones entre Entidades:
- Los usuarios pueden seleccionar una **Red** y un **Negocio** relacionado con la promoción.
- Los datos de redes y negocios se cargan dinámicamente desde servicios simulados que consumen fake endpoints.

#### Fake Endpoints:
Se crearon endpoints simulados usando un archivo JSON como fuente de datos:
- `GET /promociones`: Obtiene la lista de promociones.
- `POST /promociones`: Crea una nueva promoción.
- `PUT /promociones/:id`: Actualiza una promoción existente.
- `DELETE /promociones/:id`: Elimina una promoción.
- `GET /redes`: Obtiene las redes disponibles.
- `GET /negocios`: Obtiene los negocios disponibles según la red seleccionada.

#### Diseño:
- Se utilizó **Bootstrap** para implementar un diseño sencillo, limpio y responsivo.
- El formulario es intuitivo, con campos claros y botones bien posicionados.

---

## Demo en Vivo
[Promoción App - Live Demo](https://sfelsch.github.io/promocion-app/)

---
