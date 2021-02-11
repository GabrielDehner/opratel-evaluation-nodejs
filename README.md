# CRUD de Usuarios
_Api que permite crear, eliminar, actualizar y listar usuarios._

### Pre-requisitos 📋
_Poseer un entorno de node para ejecutar el proyecto._
_Poseer mongodb._

_Asegurar que existe el archivo .env dentro del directorio opratel-evaluation. De lo contrario completarlo/modificarlo de la siguiente manera o equivalente._
```
PORT=5000
API=api
VERSION=v1
HOST=localhost
URI_MONGO_DB=mongodb://localhost:27017/
NAME_DB=bd_test_opratel
URI_SWAGGER=api-docs
```

### Ejecución
_Dentro del directorio opratel-evaluation utilizar los siguientes comandos de ejecución._
* **npm i** - *Descarga los módulos necesarios.*
* **npm test** - *Ejecuta las pruebas dentro del directorio "test". Cabe mencionar que se realizaron pruebas utilizando Chai junto con Mocha.*
* **export $(cat .env | xargs) && npm start** - *Genera las variables de entorno e inicia el proyecto compilado.*
* **npm start** - *Inicia el proyecto compilado.*

### Endpoints Soportados (en ruta descrita o equivalente)
* **(POST) http://localhost:5000/api/v1/user** - *Crea un nuevo usuario con el body compuesto por "username, nombre, apellido, email" (addUser).*
* **(DELETE) http://localhost:5000/api/v1/user/id** - *Elimina el usuario con el id ingresado (delUser).*
* **(GET) http://localhost:5000/api/v1/users** - *Listado de usuarios (getUsers).*
* **(PUT) http://localhost:5000/api/v1/user/id** - *Crea el usuario con el id ingresado y el body compuesto por "username, nombre, apellido, email" (updateUser).*

### Swagger Creado
_Cabe mencionar que en la dirección http://localhost:5000/api-docs o equivalente se ha generado un swagger a fin de facilitar las peticiones._
