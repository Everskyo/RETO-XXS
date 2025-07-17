# 🛡️ RETO XSS - Protección contra Vulnerabilidades en Aplicaciones Web

Este proyecto consiste en una aplicación web desarrollada con Node.js, Express y EJS, la cual originalmente presentaba vulnerabilidades del tipo **XSS (Cross-site Scripting)**. Como parte del reto, se identificaron, probaron y corrigieron dichas vulnerabilidades, mejorando además el diseño de la interfaz.

---

## 📌 Objetivo

Detectar, explotar y mitigar vulnerabilidades de tipo XSS (Stored y Reflected) en una aplicación web, garantizando mayor seguridad en el manejo de entradas y salidas de usuario.

---

## ⚠️ Vulnerabilidades Detectadas

### ✅ Stored XSS
- Ruta: `/nuevo`
- Problema: Permitía guardar contenido con scripts maliciosos en los campos `autor` o `comentario`.

### ✅ Reflected XSS
- Ruta: `/buscar?autor=`
- Problema: El parámetro `autor` se reflejaba directamente en la vista sin sanitización, permitiendo ejecución de scripts.

---

## 🧪 Pruebas Realizadas

- Ingreso de: `<script>alert('XSS')</script>` como comentario.
- Modificación de la URL: `/buscar?autor=<script>alert('XSS')</script>`
- Confirmación de ejecución de scripts en ambas rutas antes de implementar las soluciones.

---

## 🛠️ Soluciones Implementadas

### 🔒 Sanitización de Entrada
- Uso de la librería [`xss`](https://www.npmjs.com/package/xss) para filtrar scripts en los campos de entrada.

### 🧱 Consultas Parametrizadas
- Se evitaron inyecciones SQL usando parámetros (`?`) en las consultas de base de datos.

### 🔐 Escapado de Salidas en Vistas
- Se verificó el uso de `<%= %>` en lugar de `<%- %>` para evitar ejecución de HTML en las vistas EJS.

---

## 🎨 Mejoras de Diseño

- Estilos modernizados con mejor distribución de los elementos.
- Inclusión de íconos y estilos CSS más amigables.
- Validación de campos vacíos antes de enviar formularios.
- Mensajes de error y éxito más claros para el usuario.

---

## 📦 Tecnologías Usadas

- Node.js
- Express.js
- EJS
- SQLite3
- xss (sanitización)
- CSS básico

---

## ✅ Resultado

- La aplicación mantiene su funcionalidad original.
- Las entradas maliciosas ya no ejecutan scripts.
- El diseño es más intuitivo y profesional.
- Se eliminó por completo el riesgo de ataques XSS en las rutas probadas.

---

## 👨‍💻 Autor

**Everardo Padrón Castillo**  
Matrícula: 21103  
Profesor: Dionisio Huerta Rosario  
Materia: Desarrollo Web Integral

---

## 📁 Instalación

```bash
git clone https://github.com/Everskyo/RETO-XXS.git
cd RETO-XXS
npm install
node app.js
