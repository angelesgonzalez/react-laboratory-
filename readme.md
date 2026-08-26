# Filtrado organización miembros Github

Práctica del módulo de React del Máster Frontend de Lemoncode, parte básica.

## Qué hice

Partí del ejemplo `03-list`, que muestra el listado de miembros de la
organización `lemoncode` de Github y navega a una página de detalle al
pinchar en un miembro.

Añadí:

- Un input y un botón para filtrar por organización (por defecto muestra
  `lemoncode`, y se puede buscar cualquier otra, ej. `microsoft`).
- El envío del formulario funciona tanto con click en el botón como con
  Enter, sin recargar la página.
- La organización buscada se guarda en la URL con `useSearchParams`, así que
  al volver de la página de detalle se sigue viendo la organización que
  había tecleado, en vez de resetearse a `lemoncode`.

## Cómo correrlo

```bash
npm install
npm start
```
