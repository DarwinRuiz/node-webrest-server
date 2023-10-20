# Node TypeScript RESTful Web Server with Clean Architecture and SQL Server Integration

## Description

This project is a RESTful web server developed in Node.js using TypeScript. The web server implements a clean architecture that clearly separates the application, domain, and data layers, making code scalability and maintenance easier.

## Features

- RESTful web server in Node.js with TypeScript.
- Clean architecture for clear separation of responsibilities.
- Integration with a SQL Server database for data storage and retrieval.
- RESTful API for creating, reading, updating, and deleting resources.
- Input validation and error handling.
- Unit and integration tests included.
- Flexible configuration through environment variables.

## Requirements

Make sure you have the following installed before getting started:

- Node.js and npm
- TypeScript
- SQL Server
- A SQL Server client (e.g., SQL Server Management Studio)
- Project dependencies (you can install them using `npm install`)

## Setup

1. Clone this repository.
2. Create a database in SQL Server for the project and configure the environment variables for the database connection in a `.env` file (you can use the `.env.example` file as a guide).
3. Run `npm install` to install project dependencies.
4. Run `npm run build` to compile the TypeScript code.
5. Run `npm start` to start the web server.

## Usage

Once the server is up and running, you can interact with the RESTful API using tools like Postman or curl. Refer to the API documentation generated with Swagger for more details on available endpoints.

**Note:** Ensure your SQL Server database is running, and the connection configuration is correct.

## Contribution

If you wish to contribute to this project, we welcome collaborators! If you have suggestions or improvements, feel free to submit a pull request.

**Español:**

# Servidor Web RESTful Node TypeScript con Arquitectura Limpia e Integración de SQL Server

## Descripción

Este proyecto es un servidor web RESTful desarrollado en Node.js utilizando TypeScript. El servidor web implementa una arquitectura limpia que separa claramente las capas de aplicación, dominio y datos, lo que facilita la escalabilidad y el mantenimiento del código.

## Características

- Servidor web RESTful en Node.js con TypeScript.
- Arquitectura limpia (Clean Architecture) para una separación clara de responsabilidades.
- Integración con una base de datos SQL Server para almacenar y recuperar datos.
- API RESTful para crear, leer, actualizar y eliminar recursos.
- Validación de entrada y manejo de errores.
- Pruebas unitarias y de integración incluidas.
- Configuración flexible a través de variables de entorno.

## Requisitos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Node.js y npm
- TypeScript
- SQL Server
- Un cliente SQL Server (por ejemplo, SQL Server Management Studio)
- Dependencias del proyecto (puedes instalarlas usando `npm install`)

## Configuración

1. Clona este repositorio.
2. Crea una base de datos en SQL Server para el proyecto y configura las variables de entorno para la conexión a la base de datos en un archivo `.env` (puedes utilizar el archivo `.env.example` como guía).
3. Ejecuta `npm install` para instalar las dependencias del proyecto.
4. Ejecuta `npm run build` para compilar el código TypeScript.
5. Ejecuta `npm start` para iniciar el servidor web.

## Uso

Una vez que el servidor esté en funcionamiento, puedes interactuar con la API RESTful utilizando herramientas como Postman o curl. Consulta la documentación de la API generada con Swagger para obtener más detalles sobre los puntos de enlace disponibles.

**Nota:** Asegúrate de que tu base de datos SQL Server esté en funcionamiento y que la configuración de conexión sea correcta.

## Contribución

Si deseas contribuir a este proyecto, ¡estamos abiertos a colaboradores! Si tienes sugerencias o mejoras, no dudes en enviar una solicitud de extracción.
