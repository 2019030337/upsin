const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Trabajando servidor");
    
});

router.get('/index', (req,res)=>{
        res.render('index.html',{title:'Index'})
});

router.get('/categoria1', (req,res)=>{
    res.render('categoria1.html',{title:'Categoría 1'})
});

router.get('/categoria2', (req,res)=>{
    res.render('categoria2.html',{title:'Categoría 2'})
});

router.get('/categoria3', (req,res)=>{
    res.render('categoria3.html',{title:'Categoría 3'})
});

router.get('/categoria4', (req,res)=>{
    res.render('categoria4.html',{title:'Categoría 4'})
});

router.get('*', (req,res)=>{
    res.send("No existe la página")
})

module.exports=router;