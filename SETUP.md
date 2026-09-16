# 🚀 Guía de Setup - Portafolio Interactivo

¡Tu portafolio está casi listo! Sigue estos pasos para terminar:

## 🔧 Paso 1: Instalar Node.js

1. Descarga Node.js desde [nodejs.org](https://nodejs.org/)
   - Descarga la versión **LTS** (actualmente 20.x o superior)
2. Ejecuta el instalador y sigue los pasos por defecto
3. **Reinicia tu computadora después de instalar** para que se actualice el PATH

### Verificar instalación:
Abre PowerShell/CMD y ejecuta:
```powershell
node --version
npm --version
```

Ambos deben mostrar versiones.

## 🛠️ Paso 2: Instalar dependencias

En la carpeta del proyecto, abre PowerShell y ejecuta:

```powershell
npm install
```

Esto instalará todas las dependencias necesarias (puede tomar 2-3 minutos).

## 🏃 Paso 3: Ejecutar en desarrollo

```powershell
npm run dev
```

Abre tu navegador y ve a: **http://localhost:3000**

## ✏️ Paso 4: Personalizar tu información

Edita estos archivos con tu información personal:

1. **src/components/Hero.tsx**
   - Nombre y descripción principal
   - Enlaces de redes sociales

2. **src/components/About.tsx**
   - Información sobre ti
   - Foto/avatar

3. **src/components/Skills.tsx**
   - Tus habilidades técnicas
   - Tecnologías que dominas

4. **src/components/Experience.tsx**
   - Tu experiencia laboral
   - Proyectos realizados

5. **src/components/Education.tsx**
   - Tu educación formal
   - Cursos y certificaciones

6. **src/components/Contact.tsx**
   - Tus datos de contacto (email, teléfono, etc.)
   - Enlaces sociales

7. **src/components/Projects.tsx**
   - Línea ~26: Reemplaza `crisdevfm` con tu username de GitHub
   - Tu información de contacto

## 📦 Paso 5: Build para producción

Cuando esté listo para subir:

```powershell
npm run build
npm start
```

## 🌐 Paso 6: Deploy a GitHub Pages

1. Asegúrate de tener un repositorio en GitHub llamado `CrisdevFm.github.io` (reemplaza con tu username)

2. En la carpeta del proyecto, inicializa git:
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tuusername/tuusername.github.io.git
git push -u origin main
```

3. En `next.config.ts`, asegúrate de que esté configurado para GitHub Pages:
```typescript
const nextConfig = {
  output: 'export',
};
```

4. Haz build y push:
```powershell
npm run build
git add .
git commit -m "Deploy"
git push
```

5. Ve a tu repositorio en GitHub → Settings → Pages
   - Selecciona la rama `main`
   - Carpeta `/ (root)`
   - Guarda

¡Tu portafolio estará disponible en `https://tuusername.github.io` en unos minutos!

## 🎨 Personalización avanzada

### Cambiar colores

Edita `tailwind.config.ts`:
```typescript
colors: {
  primary: "#00d4ff",    // Cambiar este color
  accent: "#ff006e",     // Y este
}
```

### Agregar más secciones

Crea un nuevo componente en `src/components/` y agrega la sección a `src/app/page.tsx`.

## 📚 Recursos útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GitHub API](https://docs.github.com/en/rest)

## ❓ Problemas comunes

### `npm: El término 'npm' no se reconoce`
→ Node.js no está instalado o necesita reiniciar el sistema

### Puerto 3000 ya está en uso
```powershell
npm run dev -- -p 3001
```

### Los proyectos de GitHub no aparecen
→ Asegúrate de cambiar el username en `src/components/Projects.tsx`

### Las animaciones se ven lentas
→ Abre DevTools (F12) y desactiva "Throttling" en Network

---

**¿Preguntas? Consulta el README.md o revisa los archivos de componentes con comentarios.**
