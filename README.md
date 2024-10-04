# Generador de Carnet

## Descripción

El **Generador de Carnet** es una aplicación diseñada para facilitar la creación y descarga de carnets para trabajadores de inamujer. Este sistema permite a los usuarios cargar imágenes, seleccionar departamentos y buscar trabajadores específicos para generar carnets con información detallada y visualmente atractiva.

## Características Principales

- **Carga de Imágenes**: Los usuarios pueden cargar múltiples imágenes de trabajadores, que serán utilizadas para personalizar los carnets.
- **Selección de Departamento**: Un menú desplegable permite seleccionar el departamento correspondiente para cada trabajador.
- **Búsqueda de Trabajadores**: Una funcionalidad de búsqueda permite encontrar rápidamente a los trabajadores por su cédula.
- **Generación de Carnets**: El sistema genera carnets tanto para la parte frontal como para la parte trasera, incluyendo información relevante como el nombre del trabajador y su número de cédula.
- **Descarga de Carnets**: Los carnets generados pueden ser descargados en formato PNG, permitiendo a los usuarios guardar e imprimir los carnets fácilmente.

## Ejemplo de Uso

1. **Carga de Imágenes**: El usuario carga las imágenes de los trabajadores.
2. **Selección de Departamento**: El usuario selecciona el departamento correspondiente desde el menú desplegable.
3. **Búsqueda de Trabajadores**: El usuario busca a un trabajador específico utilizando la barra de búsqueda.
4. **Generación y Descarga**: El usuario genera el carnet y lo descarga en formato PNG.

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías y bibliotecas:

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **React DOM**: Proporciona métodos específicos del DOM que se pueden usar en el nivel superior de tu aplicación.
- **React Router DOM**: Herramienta para manejar el enrutamiento en aplicaciones React.
- **React Query**: Herramienta para gestionar el estado de las solicitudes de datos en aplicaciones React.
- **TypeScript**: Un superconjunto de JavaScript que añade tipos estáticos.
- **Vite**: Un entorno de desarrollo rápido y moderno para proyectos web.
- **Tailwind CSS**: Un framework de CSS para construir interfaces de usuario personalizables.
- **ESLint**: Una herramienta para identificar y reportar patrones encontrados en el código ECMAScript/JavaScript.
- **QRCode.react**: Un componente de React para generar códigos QR.
- **html-to-image**: Una biblioteca para convertir HTML a imágenes.
- **react-component-export-image**: Una biblioteca para exportar componentes de React como imágenes.
- **PostCSS**: Una herramienta para transformar estilos con plugins de JavaScript.
- **Autoprefixer**: Un plugin de PostCSS para parsear CSS y añadir prefijos de proveedores a las reglas CSS.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:
```
├── src
│   ├── assets
│   ├── components
│   │   ├── CarnetFront.tsx
│   │   ├── CarnetBack.tsx
│   │   ├── CarnetInamujer.tsx
│   │   ├── Header.tsx
│   ├── hooks
│   │   ├── useImageUploader.tsx
│   ├── pages
│   │   ├── Page404.tsx
│   │   └── PageCarnet.tsx
│   └── index.js
├── public
├── .gitignore
├── package.json
└── README.md
```
s
## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/generador-de-carnet.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd generador-de-carnet
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Inicia la aplicación:
    ```bash
    npm start
    ```

## Uso

Una vez que la aplicación esté en funcionamiento, sigue estos pasos para generar carnets:

1. **Carga de Imágenes**: Haz clic en el botón "Cargar fotos de trabajadores" y selecciona las imágenes de los trabajadores.
2. **Selección de Departamento**: Usa el menú desplegable para seleccionar el departamento correspondiente.
3. **Búsqueda de Trabajadores**: Usa la barra de búsqueda para encontrar a un trabajador específico.
4. **Generación y Descarga**:Una vez selecciona un departamento o buscado un trabajador por cédula se genera el carnet y un bóton "Descargar en png" para guardarlo en formato PNG.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

