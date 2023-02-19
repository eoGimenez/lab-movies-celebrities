const router = require("express").Router();

const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model")

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
})
router.post("/create", (req, res, next) => {
    let newCelebrity = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catch
    };
    //console.log(newCelebrity);
    Celebrity.create(newCelebrity)
    .then(result => {
        //console.log(result)
        res.redirect("/celebrities")
    })
    .catch(err => next(err));
})
router.get("/", (req, res, next) => {
    Celebrity.find()
    .then(result => {
        //console.log("resultado: ", result)
        res.render("celebrities/celebrities", result)
    })
    .catch(err => next(err));
})
/* router.get("/deleteear", (req, res, next) => {
    .then()
    return Recipe.deleteMany()
}) */

module.exports = router;