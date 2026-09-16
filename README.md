# 🎨 Cristian Forero - Interactive Portfolio

Un portafolio interactivo y profesional creado con **Next.js 14**, **TypeScript**, **Tailwind CSS**, y **Framer Motion**.

## ✨ Características

- 🎯 **Design Moderno**: Interfaz oscura y atractiva con gradientes y animaciones
- ⚡ **Rendimiento Optimizado**: Next.js 14 con Server Components
- 🎬 **Animaciones Suavidas**: Framer Motion para interacciones fluidas
- 📱 **Responsive**: Funciona perfectamente en cualquier dispositivo
- 🔗 **Integración GitHub API**: Proyectos actualizados automáticamente
- 📊 **Secciones Completas**:
  - Perfil y presentación
  - Sobre mí
  - Habilidades técnicas
  - Experiencia laboral
  - Educación
  - Proyectos (sincronizados con GitHub)
  - Formulario de contacto
  - Enlaces sociales

## 📋 Tecnologías

- **Next.js 14**: Framework React moderno
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utilities-first
- **Framer Motion**: Animaciones avanzadas
- **Axios**: Cliente HTTP para API requests
- **ESLint**: Linting de código

## 🚀 Instalación y Setup

### Requisitos
- Node.js 18+ instalado
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/crisdevfm/CrisdevFm.github.io.git
cd CrisdevFm.github.io
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno** (opcional)
```bash
# Crear .env.local si necesitas configuraciones específicas
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

## 🛠️ Desarrollo

### Comandos disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Ejecutar linter
npm run lint
```

## 🔧 Configuración Personalizada

### Reemplazar información personal

Edita estos archivos con tu información:

1. **[src/components/Hero.tsx](src/components/Hero.tsx)** - Nombre y descripción
2. **[src/components/About.tsx](src/components/About.tsx)** - Sobre ti
3. **[src/components/Skills.tsx](src/components/Skills.tsx)** - Habilidades técnicas
4. **[src/components/Experience.tsx](src/components/Experience.tsx)** - Experiencia laboral
5. **[src/components/Education.tsx](src/components/Education.tsx)** - Educación
6. **[src/components/Contact.tsx](src/components/Contact.tsx)** - Información de contacto

### Conectar tu GitHub

El portafolio trae automáticamente tus repositorios de GitHub. Solo actualiza el usuario en:

**[src/components/Projects.tsx](src/components/Projects.tsx)** - Línea ~26
```typescript
// Reemplaza 'crisdevfm' con tu usuario de GitHub
const response = await axios.get(
  "https://api.github.com/users/crisdevfm/repos",
  ...
);
```

## 📦 Deployment

### En Vercel (Recomendado)

1. Push tu código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente que es un proyecto Next.js
4. ¡Deploy listo! 🚀

### En GitHub Pages

Si usas `CrisdevFm.github.io`, necesitas:

1. Actualizar `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  basePath: '', // Deja vacío si es el repo principal
};
```

2. Build y push:
```bash
npm run build
git add .
git commit -m "Deploy"
git push origin main
```

## 🎨 Personalizar Estilos

Los colores principales se definen en:
- **[tailwind.config.ts](tailwind.config.ts)** - Tema de colores
- **[src/app/globals.css](src/app/globals.css)** - Estilos globales

Colores por defecto:
- **Primary**: `#00d4ff` (Cyan)
- **Accent**: `#ff006e` (Pink)
- **Dark**: `#0a0e27`
- **Darker**: `#050a1a`

## 📞 Contacto

- GitHub: [@crisdevfm](https://github.com/crisdevfm)
- Email: tu@email.com
- LinkedIn: [Tu perfil]

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como base para tu portafolio.

---

**Hecho con ❤️ usando Next.js, Tailwind CSS y Framer Motion**
