//Carpeta routes
//cliente.router.js
const router = require("express").Router()
const controller = require ('../controllers/clientes.control')
const Usuario = require('../models/usuarios');

router.get('/index',controller.clientes)

router.get('/Pagina2',controller.clientes)

router.get('/pagina3',controller.clientes)

router.get('/login',controller.clientes)

router.get('/portafolio',controller.clientes)

router.get('/clientes', function (req,res){
    res.render('index');

    router.post('/login', async (req, res) => {
        const {nombre_completo, Correo_electronico, usuario, contraseña } = req.body;
        
        const nuevoUsuario = new Usuario({
          nombre_completo,
          Correo_electronico,
          usuario, 
          contraseña
        });
        
        await nuevoUsuario.save();
        
        res.redirect('/');
    });    
});


module.exports = router;