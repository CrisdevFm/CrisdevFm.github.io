# 🚀 Guía de Deploy GitHub Pages

Tu portafolio está configurado para deployarse automáticamente en GitHub Pages.

## Pasos para Deployar:

### 1. **Inicializar Git (si aún no lo has hecho)**

```powershell
cd "c:\Users\ccfor\OneDrive\Documentos\Proyectos\CristianForeroWP"
git init
git add .
git commit -m "Initial commit: Portfolio setup"
```

### 2. **Agregar el repositorio remoto**

Si tu repositorio ya existe en GitHub (CrisdevFm.github.io):

```powershell
git remote add origin https://github.com/crisdevfm/CrisdevFm.github.io.git
git branch -M main
git push -u origin main
```

### 3. **El deploy es automático**

Una vez que hayas hecho push a `main`, GitHub Actions:
- ✅ Instalará dependencias
- ✅ Hará build del proyecto
- ✅ Desplegará en GitHub Pages automáticamente

Tu portafolio estará en: **https://crisdevfm.github.io**

## Comandos Útiles:

```powershell
# Ver estado de git
git status

# Ver commits
git log --oneline

# Hacer cambios y pushear
git add .
git commit -m "Descripción del cambio"
git push

# Ver ramas
git branch -a
```

## Verificar Deploy:

1. Ve a tu repositorio en GitHub
2. Abre la pestaña "Actions"
3. Busca el workflow "Deploy to GitHub Pages"
4. Cuando esté verde (✓), tu portafolio está en vivo

## Configurar Dominio Personalizado (Opcional)

Si quieres usar un dominio propio:
1. Ve a Settings → Pages
2. Agregar dominio personalizado
3. Seguir instrucciones para DNS

---

**¡Tu portafolio está listo para GitHub! 🎉**
