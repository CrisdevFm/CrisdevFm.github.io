# 📁 Estructura del Proyecto

```
CrisdevFm.github.io/
├── .github/
│   └── workflows/
│       └── nextjs.yml        # Workflow de despliegue a GitHub Pages
├── public/                    # Archivos estáticos públicos
│   ├── certificates/         # Certificados PDF o imágenes
│   ├── certificates.json     # Lista estática de certificados
│   ├── cv/                   # Carpeta de CVs para descarga/visualización
│   │   ├── CV_Cristian_Forero_Murillo.pdf
│   │   ├── CV_Cristian_Forero_Murillo_EN.pdf
│   │   ├── index.html
│   │   └── README.txt
│   └── ...
├── scripts/
│   └── generate-certificates.js  # Genera manifest para certificados
├── src/
│   ├── app/
│   │   ├── api/              # Rutas API del proyecto
│   │   ├── globals.css      # Estilos globales
│   │   ├── layout.tsx       # Layout raíz
│   │   └── page.tsx         # Página principal
│   └── components/
│       ├── About.tsx        # Sobre mí
│       ├── Certificates.tsx # Sección de certificados
│       ├── Contact.tsx      # Contacto y enlaces
│       ├── CVSection.tsx    # Sección de hojas de vida
│       ├── Education.tsx    # Educación con timeline
│       ├── Experience.tsx   # Experiencia laboral con timeline
│       ├── Footer.tsx       # Pie de página
│       ├── Header.tsx      # Navegación sticky
│       ├── Hero.tsx        # Presentación principal
│       ├── Projects.tsx    # Proyectos desde GitHub
│       └── Skills.tsx      # Habilidades técnicas
├── .env.example               # Variables de entorno de ejemplo
├── .eslintrc.json             # ESLint
├── .gitignore                 # Git ignore
├── .nojekyll                  # Evita tratamiento de Jekyll
├── next-env.d.ts              # Next.js env types
├── next.config.js             # Configuración de Next.js export static
├── package.json               # Dependencias y scripts
├── postcss.config.js          # PostCSS
├── README.md                  # Documentación principal del proyecto
├── tailwind.config.ts         # Tailwind config
├── tsconfig.json              # TS config
├── PROJECT_STRUCTURE.md       # Este archivo
└── ...
```

## 📦 Dependencias principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "next": "^14.0.0",
  "framer-motion": "^10.16.0",
  "axios": "^1.6.0",
  "tailwindcss": "^3.3.0"
}
```

## 🎯 Secciones del Portafolio

### 1. **Header** (`Header.tsx`)
- Navegación sticky
- Enlaces rápidos a cada sección
- Botón directo a GitHub

### 2. **Hero** (`Hero.tsx`)
- Presentación principal
- CTA con acceso rápido a proyectos y contacto
- Enlaces útiles a GitHub, LinkedIn y CV

### 3. **About** (`About.tsx`)
- Descripción del perfil profesional
- Información relevante de la trayectoria
- Sección de acceso rápido a la hoja de vida

### 4. **Skills** (`Skills.tsx`)
- Habilidades agrupadas por categoría
- Enfoque SAP, backend y herramientas

### 5. **Experience** (`Experience.tsx`)
- Timeline de experiencia laboral
- Puestos principales y responsabilidades

### 6. **Education** (`Education.tsx`)
- Timeline con colegio, universidad y formación continua
- Estructura cronológica clara

### 7. **CVSection** (`CVSection.tsx`)
- Acceso directo a las hojas de vida en español e inglés
- Botones para abrir o descargar PDF

### 8. **Certificates** (`Certificates.tsx`)
- Muestra certificados desde `public/certificates.json`
- Renderiza tarjetas con acceso directo a cada documento

### 9. **Projects** (`Projects.tsx`)
- Conectado a GitHub API
- Muestra repositorios destacados
- Enlaces al perfil y repositorios

### 10. **Contact** (`Contact.tsx`)
- Información de contacto real
- Email personal, CV, LinkedIn y GitHub
- Formulario listo para integración posterior

### 11. **Footer** (`Footer.tsx`)
- Enlaces rápidos
- Redes sociales
- Copyright del sitio

## 🎨 Sistema de Colores

```
Primary: #00d4ff
Accent: #ff006e
Dark: #0a0e27
Darker: #050a1a
Background: tonos oscuros con acentos azules y rosas
```

## 🔧 Configuración importante

### GitHub API
En `src/components/Projects.tsx` línea 26:
```typescript
// Cambia 'crisdevfm' por tu username
const response = await axios.get(
  "https://api.github.com/users/crisdevfm/repos"
);
```

### Tailwind CSS
Personalizado en `tailwind.config.ts`:
- Colores personalizados
- Animaciones adicionales
- Fuentes personalizadas

## 🚀 Flujo de desarrollo

1. **Desarrollo local**
   ```bash
   npm install
   npm run dev
   # Accede a http://localhost:3000
   ```

2. **Build para producción**
   ```bash
   npm run build
   npm start
   ```

3. **Despliegue en GitHub Pages**
   - Se usa el workflow de GitHub Actions
   - La app se despliega desde la salida estática de Next
   - GitHub Pages debe apuntar a `GitHub Actions`

## 📝 Cómo editar cada sección

### Actualizar CVs
Coloca tus PDFs dentro de `public/cv/` y la página los mostrará automáticamente.

### Agregar certificados
Actualiza la carpeta `public/certificates/` y/o el archivo `public/certificates.json`.

### Cambiar información de contacto
Edita `src/components/Contact.tsx`:
```typescript
const contactMethods = [
  {
    icon: "📧",
    label: "Email",
    value: "ccforerom@gmail.com",
    href: "mailto:ccforerom@gmail.com",
  },
];
```

### Cambiar experiencia laboral
Edita `src/components/Experience.tsx` con los puestos y fechas reales.

### Cambiar educación
Edita `src/components/Education.tsx` con universidad, colegio y certificaciones.

## 🌐 URLs Importantes

- **GitHub**: `https://github.com/crisdevfm`
- **LinkedIn**: `https://www.linkedin.com/in/cristian-camilo-forero-murillo-768682211/`
- **Email personal**: `ccforerom@gmail.com`
- **CVs**: `public/cv/`
- **Certificados**: `public/certificates/`

## ⚡ Performance

- ✅ Next.js 14
- ✅ App Router
- ✅ Exportación estática compatible con GitHub Pages
- ✅ Archivos públicos para CV y certificados
- ✅ Diseño responsivo con Tailwind

---

**Proyecto actualizado: Septiembre 2026**
