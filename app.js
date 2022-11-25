const express = require('express');
const app = express();
const path = require ('path');
const port = 3030;

//recursos estaticos
app.use(express.static('public'));


//rutas
//send envia array, objetos, STRINGS, necesita ruta absoluta requiriendo path
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','index.html')));
app.get('/babbage',(req,res)=>res.sendFile(path.join(__dirname,'views','babbage.html')));
app.get('/bernel-lee',(req,res)=>res.sendFile(path.join(__dirname,'views','bernel-lee.html')));
app.get('/clarke',(req,res)=>res.sendFile(path.join(__dirname,'views','clarke.html')));
app.get('/hamilton',(req,res)=>res.sendFile(path.join(__dirname,'views','hamilton.html')));
app.get('/hooper',(req,res)=>res.sendFile(path.join(__dirname,'views','hooper.html')));
app.get('/lovelace',(req,res)=>res.sendFile(path.join(__dirname,'views','lovelace.html')));
app.get('/turing',(req,res)=>res.sendFile(path.join(__dirname,'views','turing.html')));
app.get('*',(req,res)=> res.sendFile(path.join(__dirname,'views','404.html')));

//levantar servidor con listen
app.listen(port, () => console.log(`Servidor funcionando en http://localhost:${port}`));


