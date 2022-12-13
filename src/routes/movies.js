const fvrtMovie = function(req,res){

let allMovies=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
res.send(allMovies)
}

const fvrtMovieIndexNumber = function ( req , res ){
    let movie = ["Rang de basanti", "The shining," ,"Lord of the rings", "Batman begins"]

  if (req.params.index<movie.length) {
   res.send("movie name is "+movie[req.params.index])
} else {
res.send("please enter valid index value"+(movie[req.params.index] =" "));
  }
}
module.exports.fvrtMovie=fvrtMovie













