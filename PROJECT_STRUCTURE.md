# 📁 Estructura del Proyecto

```
CristianForeroWP/
├── public/                    # Archivos estáticos
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout raíz
│   │   ├── page.tsx           # Página principal
│   │   ├── globals.css        # Estilos globales
│   ├── components/            # Componentes reutilizables
│   │   ├── Header.tsx         # Navegación
│   │   ├── Hero.tsx           # Sección hero
│   │   ├── About.tsx          # Sobre mí
│   │   ├── Skills.tsx         # Habilidades
│   │   ├── Experience.tsx     # Experiencia laboral
│   │   ├── Education.tsx      # Educación
│   │   ├── Projects.tsx       # Proyectos (conectado a GitHub)
│   │   ├── Contact.tsx        # Formulario de contacto
│   │   └── Footer.tsx         # Pie de página
├── .eslintrc.json             # ESLint config
├── .gitignore                 # Git ignore
├── .env.example               # Variables de entorno ejemplo
├── eslint.config.mjs          # ESLint MJS config
├── next.config.ts             # Configuración de Next.js
├── postcss.config.js          # Configuración de PostCSS
├── tailwind.config.ts         # Configuración de Tailwind
├── tsconfig.json              # Configuración de TypeScript
├── package.json               # Dependencias del proyecto
├── README.md                  # Documentación principal
├── SETUP.md                   # Guía de instalación
└── PROJECT_STRUCTURE.md       # Este archivo

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
- Efecto blur cuando haces scroll
- Botón directo a GitHub
- Enlaces a cada sección

### 2. **Hero** (`Hero.tsx`)
- Presentación principal
- Animaciones de fondo fluidas
- Botones de CTA (Call to Action)
- Enlaces a redes sociales

### 3. **About** (`About.tsx`)
- Descripción personal
- Puntos clave sobre ti
- Avatar animado

### 4. **Skills** (`Skills.tsx`)
- Habilidades organizadas por categoría
- Grid responsivo
- Animaciones al scroll

### 5. **Experience** (`Experience.tsx`)
- Timeline de experiencia laboral
- Conecta experiencias visualmente
- Habilidades por trabajo

### 6. **Education** (`Education.tsx`)
- Educación formal
- Cursos y certificaciones
- Diseño de tarjetas

### 7. **Projects** (`Projects.tsx`) ⭐ **PUNTO CLAVE**
- Conectado a GitHub API
- Trae automáticamente tus repositorios
- Muestra stars, lenguaje y topics
- Enlace directo al repositorio

### 8. **Contact** (`Contact.tsx`)
- Métodos de contacto (email, LinkedIn, GitHub, WhatsApp)
- Formulario para mensajes (lista para integrar servicio de email)
- Validación básica

### 9. **Footer** (`Footer.tsx`)
- Enlaces rápidos
- Redes sociales
- Información de copyright

## 🎨 Sistema de Colores

```
Primary: #00d4ff (Cyan brillante)
Accent: #ff006e (Rosa/Magenta)
Dark: #0a0e27
Darker: #050a1a
Background: Gradiente dark
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

3. **Deployment**
   - Vercel (Recomendado): Conecta tu GitHub y listo
   - GitHub Pages: Usa `output: 'export'` en next.config.ts

## 📝 Cómo editar cada sección

### Actualizar nombre y descripción
Edita `src/components/Hero.tsx`:
```typescript
<motion.h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
  Hola, soy TU_NOMBRE_AQUI
</motion.h1>
```

### Cambiar información de contacto
Edita `src/components/Contact.tsx`:
```typescript
const contactMethods = [
  {
    icon: "📧",
    label: "Email",
    value: "TU_EMAIL@AQUI.COM",
    href: "mailto:TU_EMAIL@AQUI.COM",
  },
  // ... más contactos
];
```

### Agregar/modificar habilidades
Edita `src/components/Skills.tsx`:
```typescript
const skills = {
  "Frontend": [
    "React",
    "TU_HABILIDAD_AQUI",
    // ...
  ],
  // ... más categorías
};
```

### Cambiar experiencia laboral
Edita `src/components/Experience.tsx`:
```typescript
const experiences = [
  {
    title: "Tu Puesto",
    company: "Tu Empresa",
    period: "2023 - 2024",
    // ...
  },
];
```

## 🌐 URLs Importantes

- **GitHub username**: Reemplaza en Projects.tsx
- **Email**: Actualiza en Contact.tsx y Hero.tsx
- **LinkedIn**: Agrega URL en Contact.tsx y Footer.tsx
- **Redes sociales**: Actualiza en Footer.tsx y Hero.tsx

## ⚡ Performance

- ✅ Next.js 14 App Router (más rápido)
- ✅ Server Components donde es posible
- ✅ Optimización de imágenes
- ✅ Lazy loading de componentes
- ✅ CSS optimizado con Tailwind

## 🔐 Variables de entorno

Ver `.env.example` para configuraciones opcionales:
- GitHub username (automático si no configuras)
- Email service (para formulario de contacto)
- Otras URLs y API keys

---

**Proyecto actualizado: Septiembre 2026**
