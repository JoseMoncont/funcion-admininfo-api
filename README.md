# funcion-admininfo-api

Jose Montes Contreras - T00041911 | Proyecto: Implement


Administracion de Datos para: Trabajadores. (Agregar, actualizar y eliminar trabajadores de la base de datos)

Métodos: Get, Put, Delete

URI's:

Link Despliegue: https://us-central1-funcion-admininfo.cloudfunctions.net/app

Get-Put: api/trabajadores

Delete: api/trabajadores/id  


Desde postman:

Ejemplo para agregar dato a la DB:

Metodo Put
{
    "id": "1",
    "nombre": "Fred",
    "apellidos": "Gutierrez Perdomo",
    "doc_id": "1102768342",
    "sexo": "M",
    "celular": "3145247845",
    "fecha_nam": "05031998",
    "cargo": "Docente Catedra"
}

Ejemplo para eliminar dato de la DB:

Metodo delete

{
    "id": "1",
 
}

