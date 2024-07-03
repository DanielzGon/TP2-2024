const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {

const dataAtual = new Date();
const horarioAtual = dataAtual.getHours()
const minutoAtual = dataAtual.getMinutes()

 response.send('A data e hora atual é: ' + dataAtual)

})
app.listen(8080)
