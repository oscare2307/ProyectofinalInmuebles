const express = require('express');

const router = require('./routes/cliente.router');
const bodyParser = require('body-parser');
const app = express();
const Usuario = require('./models/usuarios');
const mysql = require("mysql");
// se aplico la conexion
let conexion = mysql.createConnection({
    host: "localhost",
    database: "inmuebles",
    user: "root",
    password: ""
})

app.set('view engine','ejs')
app.use (express.urlencoded({ extended:false}));
app.use (express.json());
app.set('views',__dirname + "/views");
app.use('/assets',express.static('assets'));


app.get('/',function(req,res){
    res.render('index');
    });

 app.get('/Pagina2',function(req,res){
        res.render('Pagina2');
        });


app.get('/pagina3',function(req,res){
    res.render('pagina3');
    });        
    

app.get('/login',function(req,res){
    res.render('login');
    });

//se aplico un metodo para guardar los datos
app.post("/validar", function(req,res){
    const datos = req.body;
    let nombre_completo = datos.nombre_completo;
    let Correo_electronico = datos.Correo_electronico;
    let usuario = datos.usuario;
    let contraseña = datos.contraseña;

    let registrar = "INSERT INTO usuarios (nombre_completo, Correo_electronico, usuario, contraseña) VALUES ('"+nombre_completo+"', '"+Correo_electronico +"', '"+usuario +"', '"+contraseña +"')";

    conexion.query(registrar, function(error){
        if(error){
            throw error;
        }else{
            console.log("Datos almacenados correctamente");
        }
    });
});  

//se aplico otro metodo para guardar los datos de iniciar sesion
app.post("/iniciarsesion", function (req,res){
    const datos = req.body;
    let Correo_electronico = datos.Correo_electronico;
    let contraseña = datos.contraseña;

    let registrar = "INSERT INTO clientes (Correo_electronico, contraseña) VALUES ('"+ Correo_electronico+"', '"+contraseña +"')";
    conexion.query(registrar, function(error){
        if(error){
            throw error;
        }else{
            console.log("Datos almacenados correctamente");
        }
    });
});  



app.get('/portafolio',function(req,res){
    res.render('portafolio');
    });    
      


    app.use('/v1',router)


    module.exports =app;
      