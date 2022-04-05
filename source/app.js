const http = require("http");
const express = require("express");
const path = require("path");
const puerto = 3000;
const app = express();
const misRutas = require('./router/index');

//Configuraciones 
        //Motor de vistas

app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);

//Recursos publicos
app.use(express.static(path.join(__dirname, 'public')));

//Router
app.use(misRutas);

app.listen(puerto, ()=>{
    console.log("Iniciando el puerto");
})