const express = require('express')
const app = express()

app.get('*', (request,response) => {
    response.send({ message: 'Hola Mundo'})
})

app.listen(3000, () => console.log('El servidor está escuchando en el puerto 3000'))