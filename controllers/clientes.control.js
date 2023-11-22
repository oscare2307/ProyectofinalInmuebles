
const controller = {}

controller.clientes = function(req,res){
    res.render('index');
}


controller.Pagina2 = function(req,res){
    res.render('Pagina2');
}

controller.pagina3 = function(req,res){
    res.render('pagina3');
}

controller.login = function(req,res){
    res.render('login');
}

controller.clientes = function(req,res){
    res.render('portafolio');
}


module.exports = controller