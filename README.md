# Teslo Shop

Proyecto de ejemplo: tienda online creada con React, TypeScript y Vite.

## Descripción

Aplicación de catálogo/tienda (front-end) para propósitos educativos y de demostración.
Incluye layouts de administración y tienda, componentes reutilizables y mocks de datos.

## Características

- Estructura modular con rutas de tienda y administración
- Componentes UI reutilizables (botones, inputs, tablas, etc.)
- Páginas de ejemplo: home, categorías, administración de productos y dashboard

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind / CSS (según el proyecto)

## Requisitos

- Node.js 16+ y npm o pnpm

## Instalación

1. Clonar el repositorio

```bash
git clone <repo-url>
cd teslo-shop
```

2. Instalar dependencias

```bash
npm install
# o
pnpm install
```

## Scripts útiles

- `npm run dev` — Inicia el servidor de desarrollo (Vite)
- `npm run build` — Genera la versión de producción
- `npm run preview` — Previsualiza la build de producción
- `npm run lint` — Ejecuta linters/configuración (si aplica)

## Estructura principal

- `src/` — Código fuente
  - `admin/` — Componentes, layouts y páginas del panel de administración
  - `auth/` — Páginas y layouts de autenticación
  - `shop/` — Páginas, layouts y componentes de la tienda
  - `lib/` — Utilidades compartidas
  - `mocks/` — Datos de ejemplo

Revisa las páginas y componentes bajo `src/` para entender la organización.

## Desarrollo

- Añade componentes bajo la carpeta correspondiente (`admin`, `shop`, `auth`).
- Mantén estilos y tokens globales en `index.css` o la configuración de Tailwind.

## Contribuir

1. Crea una rama feature/fix
2. Abre un pull request describiendo los cambios

## Licencia

Usa la licencia apropiada para tu proyecto (MIT por defecto si no hay otra).

## Contacto

Para dudas o mejoras, abre un issue en el repositorio.
