# Reto XSS - Corrección de Vulnerabilidades en Aplicaciones Web

Este proyecto es parte de un reto en el que se trabajó con una aplicación web desarrollada con Node.js, Express y EJS. El objetivo fue detectar, probar y corregir vulnerabilidades del tipo XSS (Cross-site Scripting), así como mejorar la presentación visual de la aplicación.

## Objetivo

Identificar vulnerabilidades de tipo XSS en una aplicación web, demostrarlas mediante pruebas controladas, y posteriormente implementar medidas de seguridad para prevenir este tipo de ataques.

## Vulnerabilidades encontradas

1. **Stored XSS**
   - Ruta afectada: `/nuevo`
   - El sistema permitía guardar scripts maliciosos dentro de los campos de comentario o autor, lo que se ejecutaba cada vez que otro usuario visualizaba la página.

2. **Reflected XSS**
   - Ruta afectada: `/buscar?autor=`
   - Se reflejaba directamente el valor del parámetro `autor` en la vista, lo que permitía ejecutar scripts al modificar la URL.

## Pruebas realizadas

Se ingresaron scripts maliciosos como `<script>alert('XSS')</script>` tanto en comentarios como en los parámetros de búsqueda, confirmando que eran ejecutados por el navegador antes de aplicar las correcciones.

## Soluciones aplicadas

- Se utilizó la librería `xss` para limpiar cualquier entrada de texto que pudiera contener código malicioso.
- Se aseguraron las consultas a la base de datos usando sentencias parametrizadas para evitar inyecciones.
- Se revisaron y ajustaron las vistas EJS para que el contenido ingresado por los usuarios se escape correctamente antes de ser mostrado.

## Mejoras de diseño

Además de mejorar la seguridad, se aprovechó para hacer algunos cambios visuales en la interfaz:
- Estilos mejor organizados y más claros.
- Validaciones en formularios para evitar el envío de campos vacíos.
- Mensajes más claros al usuario cuando se realizan búsquedas o envíos de información.

## Tecnologías utilizadas

- Node.js
- Express.js
- EJS
- SQLite3
- xss (librería para sanitizar entradas)
- CSS básico

## Resultado final

Después de aplicar las soluciones, las vulnerabilidades XSS quedaron corregidas y la aplicación sigue funcionando de manera normal. Ya no es posible ejecutar scripts ni guardar código malicioso en los campos de entrada o en las búsquedas.

## Autor

Everardo Padrón Castillo  
Materia: Desarrollo Web Integral  
Profesor: Dionisio Huerta Rosario  
Matrícula: 21103

## Instrucciones para ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Everskyo/RETO-XXS.git
