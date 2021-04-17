const express =  require("express");

const https = require("https");


const app =  express();

app.get("/", function(req,res){

const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=imperial&appid=bcd5953a34ae60d3a19dd457376dfad5";
    https.get(url, function(responce){

        console.log(responce);
    });
    res.send("Server is up and running.")

});

app.listen(3000,  function(){

    console.log("Server is running on port 3000!");

});