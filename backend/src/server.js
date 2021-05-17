const express = require('express');
const routes = require('./routes');
const app = express(); //App usando express para servir
const cors = require('cors'); //Permissões de url

app.use(cors()); //Padrão para qualquer acesso externo configurado
//var data = new Date();
//console.log(data.getDate() + '/' + data.getMonth() + '/'+ data.getFullYear());
//console.log(data.getHours() + ':' + data.getMinutes() + ':'+ data.getSeconds());
app.use(express.json());
app.use(routes);
app.listen(3001);