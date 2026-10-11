# Sistema de Matrícula

Proyecto académico sencillo desarrollado con HTML, CSS y JavaScript.

## Objetivo
Registrar estudiantes y mostrar una lista con sus nombres, apellidos y DNI.

## Cómo ejecutar
1. Descarga o clona este repositorio.
2. Abre `index.html` en un navegador.
3. Completa el formulario y selecciona **Registrar estudiante**.

No requiere instalación ni base de datos. Los datos se mantienen solo mientras la página está abierta.

## Incidencia INC-001
- **Problema:** el formulario permitía registrar estudiantes sin DNI.
- **Ubicación:** formulario de registro.
- **Impacto:** se generaban registros incompletos.
- **Solución aplicada:** el DNI es obligatorio, debe tener exactamente 8 dígitos y no puede repetirse.
- **Estado:** resuelta en esta versión.

## Pruebas manuales
1. Intentar registrar sin DNI: debe impedir el registro.
2. Ingresar un DNI con menos de 8 dígitos: debe mostrar un error.
3. Ingresar letras en el DNI: debe mostrar un error.
4. Registrar un DNI válido de 8 dígitos: debe añadir al estudiante a la tabla.
5. Repetir un DNI ya registrado: debe impedir el duplicado.

## Trabajo con Git
Ejemplo de comandos para registrar la solución en una rama:

```bash
git checkout -b fix/validacion-dni
git add .
git commit -m "Corregir validacion de DNI obligatorio"
git push -u origin fix/validacion-dni
```

El nombre del commit y la rama son ejemplos; deben reflejar el trabajo realmente realizado por el equipo.
