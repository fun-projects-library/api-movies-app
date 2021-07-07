const express = require("express");

const router = express.Router();

const DirectorModel = require("../models/Director");

router.get("/", (req,res)=>{
    // DirectorModel.find()

    DirectorModel.aggregate([
        {
            $lookup:{
                from: "movies",
                localField: "_id",
                foreignField: "director_id",
                as: "movies"
                
            }
        },
        {
            $project: {
                _id: 0, // if you dont want to see
                name: 1, // if you want to see
                "movies.title" : true, // if you want to see
                "movies.imdb_score" : 1 // if you want to see
            }
        }
    ])
    .then(director=>res.json(director))
    .catch(err=>res.json(err))

})


// Get a Director api/directos/:directorId
const mongoose = require('mongoose')
router.get('/:directorId',(req,res,next)=>{
  DirectorModel.aggregate([
    {
      $match:{_id:mongoose.Types.ObjectId(req.params.directorId)}
    },
    {
      $lookup:{
        from:"movies",
        localField:"_id",
        foreignField:"director_id",
        as:"movies"
      }
    }
  ])
  .then((data)=>{res.json(data)})
  .catch((err)=>{next({message:err})})
})


router.post("/", (req,res,next)=>{
    const director = new DirectorModel(req.body)

    director.save()
    .then(director=>res.json(director))
    .catch(err => next({message: err}))

    
})


// Update a Director   api/directos/:directorId
router.put('/:directorId',(req, res, next)=>{
    DirectorModel.findByIdAndUpdate(req.params.directorId, req.body, {new:true})
    .then(director=>{res.json(director)})
    .catch(err=>{next({message:err})})
})


// Delete a Director  api/directos/:directorId
router.delete('/:directorId',(req, res, next)=>{
    DirectorModel.findByIdAndRemove(req.params.directorId)
    .then(director=>res.json(director))
    .catch(err=>{next({message:err})})
})


module.exports = router