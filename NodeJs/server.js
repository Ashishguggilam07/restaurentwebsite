const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.json())

mongoose.connect(
    "mongodb+srv://ashishguggilam02:ashishlion2345@cluster0.au3vr57.mongodb.net/");

const db=mongoose.connection;

db.on("error",()=>{
    console.log("connection is not succesful");

});

db.on("open",()=>{
    console.log("connection is successful");
});

app.listen("5000",()=>{
    console.log("server running on port 5000");
});

app.get("/",(req,res)=>{
    res.send("learning nodejs");
});


require("./Routes/restaurants.routes")(app);