var express = require('express');
var router = express.Router();
var dataService =  require('../data 1/dataService');

/* GET home page. */
router.get('/', function(req, res, next) {
  const cartas = dataService.findAllPokemons();
  const tipos = dataService.findAllPokemonTypes();
  res.render('index', { 
    title: 'Pokemon',
    pokemons : cartas,
    tipos : tipos
  });
});

/*Ruta para cada carta pokemon*/ 
router.get('/pokemon/:id',function(req,res,next){
    const tipos = dataService.findAllPokemonTypes();
    const pokemon = dataService.findPokemonById(req.params.id);
    res.render('pokemon',{
        title : 'Pokemon ',
        pokemon : pokemon,
        tipos : tipos
    })
})

/*Ruta filtrar pokemon por tipo*/ 
router.get('/tipos/:tipo',function(req,res,next){
    const tipos = dataService.findAllPokemonTypes();
    const filtrosTipo = dataService.findAllPokemonsByType(req.params.tipo);
    res.render('tipos',{
        title : 'Pokemons - Tipo '+req.params.tipo,
        pokemons : filtrosTipo,
        tipos : tipos
    })
})



module.exports = router;
