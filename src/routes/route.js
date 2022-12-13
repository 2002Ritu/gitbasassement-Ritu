const express = require('express');
const router = express.Router();
const printMovie = require('./movies')
const findOne = require('../number/number')



router.get('/missingOne',findOne.missing)

router.get('/missings',findOne.missingTwo)








router.get('/movies', printMovie.fvrtMovie)

// router.get('/movie/:indexNumber',function(req,res) {
  
//     let movie = ["Rang de basanti", "The shining," ,"Lord of the rings", "Batman begins","Superman","Escape Plane", "Iron Man"]
    
//     console.log("movie name is "+movie[req.params.index]);
//     res.send(movie[req.params.index])
//    
// })

router.get('/films',function(req,res){
    let arrayObj=[ {"id": 1,"name":"The Shining"}, {"id": 2,"name": "Incendies"}, {"id": 3, "name": "Rang de Basanti" }, {"id": 4,"name": "Finding Nemo" }]

// console.log(arrayObj)
res.send(arrayObj)

})

router.get('/films/:filmId',function(req, res){
    let arrayObj=[ {"id": 1,"name":"The Shining"}, {"id": 2,"name": "Incendies"}, {"id": 3, "name": "Rang de Basanti" }, {"id": 4,"name":
     "Finding Nemo" }]

if (req.params.filmId<=arrayObj.length) {
    console.log("movie name is "+arrayObj[req.params.filmId]);
} else {
    console.log("no movie exsit with this Id "+(arrayObj[req.params.filmId] =" "));
}
res.send(arrayObj[req.params.filmId]);
});


module.exports = router;