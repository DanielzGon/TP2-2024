const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    response.render('conta')
})
app.get('/resultados', (request, response) => {
    var value1 = request.query.valor1
    var value2 = request.query.valor2
    var value3 = request.query.valor3

    var resultadofinal = value1 * value2 / value3
    if (resultadofinal == NaN) {
       resultadofinal = ("Erro, não é um número")
    }
    else{
        response.render('result', {r: resultadofinal})
    }

})

const porta = 7777
app.listen(porta, () => {
    console.log(`Servidor funcionando na porta: ${porta}`)
})
