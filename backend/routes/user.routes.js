var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
// Model
const UserModel = require("../models/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("GET request from USERS");
});

// Create a USER users/register
router.post("/register", (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then(function (password) {
    // Store hash in your password DB.
    const newUser = new UserModel({ username, password });
    newUser.save()
      .then((data) => res.json(data))
      .catch((err) => {
        next({ message: err });
      });
  });
});

// Create a Token
router.post("/authenticate", (req,res,next)=>{
    const {username, password} = req.body;
    UserModel.findOne({username})
    .then(resultUser => {
        if(!resultUser){
            res.send("The User was not found!")
        } else{
            bcrypt.compare(password, resultUser.password)
            .then( function(result){
                if(!result){
                    res.json("Authentication failed: Wrong Password...")
                } else {
                    res.json("OK, token is ready...")
                }
            })
            .catch(err=>next({message:err}))
        }
    })
    .catch(err => next({message:err}))
})

module.exports = router;