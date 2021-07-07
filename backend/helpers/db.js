const mongoose = require("mongoose");


module.exports = () => {
    const dbURL = "mongodb+srv://enes:adana4693535@cluster0.ph8hs.mongodb.net/api-movies-app";

    mongoose.connect(dbURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on("open", ()=>{console.log("Database connected succesfully!")});
    db.on("error", ()=>{console.log("Database connection was failed...")})
}


