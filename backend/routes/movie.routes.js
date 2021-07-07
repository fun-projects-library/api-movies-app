const express = require("express");

const router = express.Router();

const MovieModel = require("../models/Movie");

router.get('/', (req, res) => {
  MovieModel.find()
  .then((movieList)=>{res.json(movieList)})
  .catch((err)=>{res.json(err)})
})

//SORT => 1, ASC || -1, DESC
// GET top 10 movies
router.get('/top10', (req, res)=>{
  MovieModel.find().sort({imdb_score:1}).limit(10)
  .then((movieList)=>{res.json(movieList)})
  .catch((err)=>{res.json(err)})
})


// GET details of a movie /api/movies/:movieId
router.get('/:movieId',(req,res)=>{
  MovieModel.findById(req.params.movieId)
  .then((movie)=>{res.json(movie)})
  .catch((err)=>{res.json(err)})
})


// List movies between specific date
router.get('/between/:startYear/:endYear',(req,res)=>{
  const {startYear, endYear}=req.params
  MovieModel.find({year:{"$gte":parseInt(startYear), "$lte":parseInt(endYear)}})
  .then((movieList)=>{res.json(movieList)})
  .catch((err)=>{res.json(err)})
})


router.post('/',(req, res, next)=>{
  const newMovie = new MovieModel(req.body)
  newMovie.save()
  .then((movie)=>{res.json(movie)})
  .catch((error)=>{res.json(error)})
})

router.put('/:movieId',(req,res,next)=>{
  MovieModel.findByIdAndUpdate(req.params.movieId, req.body)
  .then((movie)=>{res.json(movie)})
  .catch((error)=>{res.json(error)})
})

router.delete('/:movieId',(req, res, next)=>{
  MovieModel.findByIdAndRemove(req.params.movieId)
  .then(movie=>res.json(movie))
  .catch(err=>res.json(err))
})


module.exports = router;