# Ríos de Agua Viva - Sitio Web de la Iglesia

Sitio web moderno y responsivo para la Iglesia Cristiana Evangélica **Ríos de Agua Viva**, construido con **Vite**, **React**, y **Tailwind CSS**. Presenta un carrusel dinámico, información de ministerios, horarios de servicio, newsletter, y una interfaz hermosa con animaciones suaves.

![Ríos de Agua Viva](https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&h=400&fit=crop)

## Características

- **Diseño Responsivo** - Experiencia perfecta en dispositivos móviles, tablets y desktop
- **Carrusel Hero** - Slideshow automático con navegación manual
- **Sección de Ministerios** - Tarjetas interactivas para Alabanza, Ministerio Infantil y Pastoral
- **Horarios y Eventos** - Información actualizada de servicios y discipulados
- **Newsletter** - Formulario de suscripción con validación de email
- **Información de Pastores** - Biografía y redes sociales de los pastores
- **Animaciones Suaves** - Transiciones profesionales y efectos hover
- **UI/UX Moderna** - Diseño limpio y profesional con Tailwind CSS

## Stack Tecnológico

- **[Vite](https://vitejs.dev/)** - Herramienta de build ultrarrápida
- **[React 19](https://react.dev/)** - Framework UI moderno con hooks
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Icons](https://react-icons.github.io/react-icons/)** - Librería de íconos
- **JavaScript** - ES6+ (sin TypeScript)

## Estructura del Proyecto

```
journal-x/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegación sticky con menú mobile
│   │   ├── Hero.jsx            # Carrusel automático
│   │   ├── CategoryCard.jsx    # Tarjetas de ministerios
│   │   ├── ArticleCard.jsx     # Tarjetas de eventos
│   │   ├── Newsletter.jsx      # Formulario de suscripción
│   │   ├── Sidebar.jsx         # Info de pastores y horarios
│   │   └── Footer.jsx          # Footer del sitio
│   ├── data/
│   │   └── content.js          # Datos de la iglesia
│   ├── assets/
│   │   └── images/             # Imágenes
│   ├── App.jsx                 # Componente principal
│   ├── index.css               # Estilos globales de Tailwind
│   └── main.jsx                # Punto de entrada de React
├── public/                     # Recursos estáticos
├── index.html                  # Template HTML
├── package.json                # Dependencias y scripts
├── tailwind.config.js          # Configuración de Tailwind
├── postcss.config.js           # Configuración de PostCSS
├── vite.config.js              # Configuración de Vite
└── README.md                   # Este archivo
```

## Comenzar

### Prerequisitos

- **Node.js** 18+ y npm instalados
- Conocimiento básico de React y Tailwind CSS

### Instalación

1. **Navegar al directorio del proyecto:**

```bash
cd journal-x
```

2. **Instalar dependencias:**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo:**

```bash
npm run dev
```

4. **Abrir el navegador y visitar:**

```
http://localhost:5174
```

El servidor de desarrollo soporta Hot Module Replacement (HMR), por lo que tus cambios aparecerán instantáneamente.

## Scripts Disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo en `http://localhost:5174` con HMR habilitado.

### Build

```bash
npm run build
```

Crea un build optimizado para producción en la carpeta `dist/`.

### Preview

```bash
npm run preview
```

Previsualiza el build de producción localmente antes del despliegue.

### Lint

```bash
npm run lint
```

Ejecuta ESLint para verificar la calidad del código.

## Contenido del Sitio

### Secciones Principales

1. **Inicio (Hero)** - Carrusel con 3 slides de bienvenida
2. **Nuestros Ministerios** - Alabanza y Adoración, Ministerio Infantil, Ministerio Pastoral
3. **Próximos Eventos y Horarios** - Cultos dominicales y discipulados
4. **Newsletter** - Suscripción para recibir actualizaciones
5. **Quiénes Somos** - Historia y misión de la iglesia
6. **Nuestros Pastores** - Info de Pastores Juan Manuel y Mariana Guzmán
7. **Contacto** - Dirección y redes sociales

### Información de la Iglesia

- **Nombre:** Ríos de Agua Viva
- **Ubicación:** San Juan Tlautla, 72750, Cholula de Rivadavia, Puebla
- **Fundación:** Diciembre 2023
- **Pastores:** Juan Manuel y Mariana Guzmán (20 años de matrimonio, 13 años en el ministerio)

### Horarios de Servicio

- **Domingos 10:30 AM** - Discipulado: Fundamentos de la Fe (Presencial)
- **Domingos 12:00 PM** - Culto General: Adoración y Palabra (Presencial)
- **Miércoles 8:30 PM** - Discipulado de Adoración (Vía Zoom)

### Redes Sociales

- **Facebook:** [facebook.com/RiosDeAguaVivaPuebla](https://facebook.com/RiosDeAguaVivaPuebla)
- **Instagram:** [@riosdeaguaviva70](https://instagram.com/riosdeaguaviva70)

## Personalización

### Actualizar Contenido

Edita `src/data/content.js` para modificar:
- Slides del carrusel
- Información de ministerios
- Eventos y horarios
- Datos de los pastores
- Sección "Quiénes Somos"

### Cambiar Colores

Edita `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#4A90E2',      // Azul principal
      secondary: '#2c3e50',     // Gris oscuro
      dark: '#1a1a1a',         // Negro
    },
  },
}
```

### Modificar Intervalos del Carrusel

En `src/components/Hero.jsx`, cambia el intervalo de auto-avance (default: 5000ms):

```javascript
const timer = setInterval(() => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
}, 5000); // Cambia este valor
```

## Despliegue

### Build para Producción

```bash
npm run build
```

Esto crea una carpeta `dist/` con archivos optimizados listos para despliegue.

### Desplegar en Vercel

```bash
npm install -g vercel
vercel
```

### Desplegar en Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Desplegar en GitHub Pages

1. Instalar gh-pages:
```bash
npm install -D gh-pages
```

2. Agregar a package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Desplegar:
```bash
npm run deploy
```

## Soporte de Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Características de Rendimiento

- Imágenes optimizadas desde Unsplash CDN
- Lazy loading support
- Bundle size mínimo
- Carga de página rápida con Vite
- Re-renders eficientes con React

## Accesibilidad

- Elementos HTML5 semánticos
- Textos alt para imágenes
- Labels ARIA para elementos interactivos
- Soporte de navegación con teclado
- Estados de focus para elementos interactivos

## Mejoras Futuras

Características potenciales a agregar:
- [ ] Páginas de detalle para cada ministerio
- [ ] Sistema de eventos con calendario
- [ ] Galería de fotos
- [ ] Audio de predicaciones
- [ ] Transmisión en vivo
- [ ] Sistema de donaciones
- [ ] Blog con devocionales
- [ ] Peticiones de oración
- [ ] Directorio de miembros
- [ ] Reserva de espacios

## Contribuir

Siéntete libre de hacer fork de este proyecto y personalizarlo para tu iglesia. Pull requests son bienvenidos.

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## Reconocimientos

- Imágenes de [Unsplash](https://unsplash.com/)
- Íconos de [React Icons](https://react-icons.github.io/react-icons/)
- Construido con [Vite](https://vitejs.dev/) y [React](https://react.dev/)
- Estilos con [Tailwind CSS](https://tailwindcss.com/)

## Soporte

Para preguntas o problemas, por favor abre un issue en el repositorio de GitHub.

---

**Construido con ❤️ para Ríos de Agua Viva usando Vite + React + Tailwind CSS**

*"Donde encontrarás vida en Cristo"*
