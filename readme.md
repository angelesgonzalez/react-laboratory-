# Opcional — Filtrado organización miembros Github

Sobre el ejercicio base (input + botón para filtrar por organización, con
persistencia del filtro al volver de la página de detalle) he implemnetado los siguientes puntos opcionales:

## Paginación

- La API de GitHub se consulta con `per_page` y `page` como query params.
- La página actual se guarda en la URL (`useSearchParams`), igual que la organización buscada.
- Botones "Anterior" / "Siguiente" se deshabilitan automáticamente.

## Arquitectura

Intenté reorganizar el codigo con la architectura de **pods** enseñada, utilicé algo más sencillo poruqe el ejercicio no tenia tantos modulos y consideré que era mejor tenerlo ligero.

```
src/
  core/
    types.ts                      →  interfaces
  pods/
    member-list/
      index.ts                    → barrel
      useOrgMembers.ts             → hook que encapsula la lógica del fetch
      components/
        SearchForm.tsx
        MemberRow.tsx
        PaginationControl.tsx
  list.tsx, detail.tsx, login.tsx  → scenes, consumen el pod vía su barrel
```

`ListPage` pasé de mezclar fetch + estado de formulario + JSX en un únicoarchivo, a tener componentes y un custom hook para la llamada.

## Material UI

Se sustituyeron los elementos HTML nativos (`input`, `button`, `img`) por sus
equivalentes de MUI: `TextField`, `Button`,
`Avatar`, `Typography`, `Container`, `Stack` y `Link`.
