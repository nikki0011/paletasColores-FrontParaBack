# 💻 CRUD Paleta de Colores

Este proyecto es una aplicación web desarrollada con React y TypeScript que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un listado de colores. Es ideal sobre colores a traves de nombre codigos exadecimal y codigo RGB

## 🦖 Demo

mira la demo del proyecto [aqui](https://paletacolores-frontend.netlify.app/)

## 🚀 Librerías utilizadas

- React
- TypeScript
- Vite
- React Router
- Tailwind
- react-icons
- sweetalert 2
- react-dom
- react-hook-form

## 📦 Pasos para usar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/nikki0011/paletasColores-FrontParaBack
   ```
2. **Instalar dependencias:**
   ```bash
   pnpm install
   ```
3. **Crear la variable de entorno:**
   - Crea un archivo llamado `.env` en la raíz del proyecto.
   - Agrega las siguientes líneas (ajusta el valor según corresponda):
     ```bash
     VITE_COLOR= https://backend-paletadecolores.onrender.com/api/colores
     ```
4. **Iniciar el proyecto:**
   ```bash
   pnpm run dev
   ```

## 📂 Estructura de carpetas

```
├── public/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── Footer.tsx
│   │   │   ├── FormularioColor.tsx
│   │   │   ├── ItemColor.tsx
│   │   │   ├── ListaDeColores.tsx
│   │   │   └── Navbar.tsx
│   │   │ 
│   ├── helpers/
│   │   └── queries.ts
│   └── interfaces/
│       └── color.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 👩🏻‍💻 Autor

Hecho por [Nair Paez](https://github.com/nikki0011)