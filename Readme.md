# CoderHouse - Backend

API REST desarrollada con **Node.js** y **Express.js** como parte del curso de Backend de CoderHouse.

El proyecto implementa una API para la gestión de servicios, permitiendo realizar operaciones **CRUD** (crear, consultar, modificar y eliminar).

## 🚀 Tecnologías utilizadas

* Node.js
* Express.js
* JavaScript
* ES Modules
* dotenv
* npm

## 📁 Estructura del proyecto

```text
CoderHouse-BackEnd/
│
├── src/
│   └── app.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── Readme.md
```

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/MartinfMelendez/CoderHouse-BackEnd.git
```

### 2. Ingresar al proyecto

```bash
cd CoderHouse-BackEnd
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto tomando como referencia el archivo `.env.example`.

Ejemplo:

```env
PORT=8080
```

> El archivo `.env` no debe subirse al repositorio. Para esto se encuentra incluido en `.gitignore`.

### 5. Iniciar el servidor

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

El proyecto utiliza `Nodemon`, por lo que el servidor se reinicia automáticamente cuando se detectan cambios en los archivos.

Una vez iniciado, la API estará disponible en:

```text
http://localhost:8080
```

> El puerto utilizado depende del valor configurado en la variable `PORT`.

---

# 📌 API REST

La API utiliza como ruta base:

```text
/api/services
```

## 🔎 Endpoints disponibles

| Método | Endpoint            | Descripción                 |
| ------ | ------------------- | --------------------------- |
| GET    | `/api/services`     | Obtener todos los servicios |
| GET    | `/api/services/:id` | Obtener un servicio por ID  |
| POST   | `/api/services`     | Crear un nuevo servicio     |
| PUT    | `/api/services/:id` | Actualizar un servicio      |
| DELETE | `/api/services/:id` | Eliminar un servicio        |

---

## 1. Obtener todos los servicios

### GET

```http
GET http://localhost:8080/api/services
```

Devuelve la lista de servicios registrados.

---

## 2. Obtener un servicio por ID

### GET

```http
GET http://localhost:8080/api/services/:id
```

Ejemplo:

```http
GET http://localhost:8080/api/services/1
```

El valor `1` corresponde al ID del servicio que se desea consultar.

---

## 3. Crear un nuevo servicio

### POST

```http
POST http://localhost:8080/api/services
```

Enviar los datos mediante el **Body** en formato JSON.

Ejemplo:

```json
{
  "name": "Servicio de prueba",
  "description": "Descripción del servicio",
  "duration": 60,
  "price": 15000,
  "category": "General",
  "available": true
}
```

### Campos

| Campo         | Tipo    | Descripción                           |
| ------------- | ------- | ------------------------------------- |
| `name`        | String  | Nombre del servicio                   |
| `description` | String  | Descripción del servicio              |
| `duration`    | Number  | Duración del servicio                 |
| `price`       | Number  | Precio del servicio                   |
| `category`    | String  | Categoría del servicio                |
| `available`   | Boolean | Indica si el servicio está disponible |

---

## 4. Actualizar un servicio

### PUT

```http
PUT http://localhost:8080/api/services/:id
```

Ejemplo:

```http
PUT http://localhost:8080/api/services/1
```

Body:

```json
{
  "name": "Servicio actualizado",
  "description": "Nueva descripción",
  "duration": 90,
  "price": 20000,
  "category": "General",
  "available": true
}
```

El `:id` corresponde al servicio que se desea modificar.

---

## 5. Eliminar un servicio

### DELETE

```http
DELETE http://localhost:8080/api/services/:id
```

Ejemplo:

```http
DELETE http://localhost:8080/api/services/1
```

El `:id` corresponde al servicio que se desea eliminar.

---

# 🧪 Pruebas de la API

Los endpoints pueden probarse utilizando herramientas como:

* Postman
* Insomnia
* Thunder Client
* REST Client para VS Code

Se recomienda probar cada endpoint utilizando los diferentes métodos HTTP:

```text
GET
POST
PUT
DELETE
```

---

# 📦 Dependencias

El proyecto utiliza actualmente:

* **Express 5.2.1** — Framework para la creación del servidor y la API REST.
* **dotenv 17.4.2** — Gestión de variables de entorno.

El proyecto utiliza **ES Modules**, por lo que se trabaja con `import` y `export`.

---

# 🎯 Objetivo del proyecto

Este proyecto forma parte del aprendizaje de **Backend con Node.js** y tiene como objetivo aplicar conceptos fundamentales del desarrollo de APIs REST, incluyendo:

* Creación de servidores con Node.js.
* Uso del framework Express.
* Manejo de rutas.
* Métodos HTTP.
* Creación de endpoints.
* Manejo de parámetros.
* Recepción de información mediante JSON.
* Operaciones CRUD.
* Uso de variables de entorno.
* Organización básica de un proyecto backend.

---

# 👨‍💻 Autor

**Martin F. Melendez**

Repositorio:

https://github.com/MartinfMelendez/CoderHouse-BackEnd
