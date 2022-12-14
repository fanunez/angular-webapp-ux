# Pasos para desplegar el frontend
## A. Verificar si está instalado node.js
1. Abrir una CMD desde el buscador
2. Escribir "node -v" sin las comillas.
3. En caso de que arroje un error, debe instalarlo.
4. Si no existe error, avanzar al paso C
## B. Instalar node.js
1.- Ir a la página web https://nodejs.org/es/download/
2.- Seleccionar el instalador de windows, posteriormente iniciará una descarga
3.- Al momento de terminar la descarga, seleccione el archivo descargado
4.- Realice una instalación por defecto, es decir, solo seleccionar la opción "Next"
### B.1. Volver a hacer el paso A
## C. Instalar Angular
1.- En la misma consola, escribir la instrucción "npm install -g @angular/cli"

# Para desplegar la aplicación web
NOTA: Para que la aplicación funcione correctamente, debe estar ejecutandose el backend, para ver las instrucciones, ir al siguiente link = https://github.com/fanunez/spring-backend-ux
1. Descargar el repositorio actual
2. Guardarlo en la carpeta "Documentos"
3. Abrir un CMD de la misma forma que en el paso A
4. Escribir "cd Documents"
5. Escribir "cd angular-webapp-ux"
6. Escribir npm i
8. Escribir ng serve
9. Acceder a la dirección http://localhost:4200/
