const router = require("express").Router();

const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

router.get("/create", (req, res, next) => {
  Celebrity.find()
    .then((result) => {
      console.log(result);
      res.render("movies/new-movie", { movie : result } );
    })
    .catch((err) => next(err));
});
router.post("/create", (req, res, next) => {
    // tengo que hacer un celebrity.find({name}), para recuperar su _id para pasarselo en el body para el newMovie.cast
    //buscar elemento SELECTO para poder seleccionar los actores de la lista, NO INGRESAR LOS ACTORES CON TEXTO
    let {title, genre, plot} = req.body
    let cast = { cast: req.body.cast}
    console.log("devuelve del body", cast);//mirar para el find
    //depende de como llega, usaremos $in, $all para filtrar los actores y devolver sus _id, a la creacion de Movies
    Celebrity.find({name: {$in: [cast.cast]}}, )
    .then (result => {
      console.log(result)
    })
    /* Movie.create(newMovie) 
    .then(result => {
        console.log("console dentro de then", result)
        res.redirect("/movies/movies");
    }) */
    .catch(err => next(err));
})

module.exports = router;
