
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/', (request, response) => {
    response.render('index'); 
});

app.get('/resultado', (request, response) => {
    const n1 = parseFloat(request.query.n1);
    const n2 = parseFloat(request.query.n2);
    let resultado;

    if (request.query.operacao === '+') {
        resultado = n1 + n2;
    } else if (request.query.operacao === '-') {
        resultado = n1 - n2;
    } else if (request.query.operacao === '*') {
        resultado = n1 * n2;
    } else if (request.query.operacao === '/') {
        resultado = n1 / n2;
    } else {
        resultado = 'Operação inválida';
    }

    response.render('resultado', { resultado }); 
});

const porta = 7777;
app.listen(porta, () => {
    console.log(`Servidor funcionando na porta: ${porta}`);
});
