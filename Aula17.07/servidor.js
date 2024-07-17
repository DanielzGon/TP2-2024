const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    response.render('index')
})

app.get('/resultado', (request, response) => {
    n1 = parseFloat(request.query.n1)
    n2 = parseFloat(request.query.n2)
    resultado = 0
    if (request.query.operacao == '+') {
        result = (n1.value) + (n2.value);
    }
    response.render('resultado')

})

const porta = 7777
app.listen(porta, () => {
    console.log(`Servidor funcionando na porta: ${porta}`)
})
