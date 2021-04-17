const express =  require("express");

const https = require("https");


const app =  express();

app.get("/", function(req,res){

const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=imperial&appid=bcd5953a34ae60d3a19dd457376dfad5";
    https.get(url, function(responce){

        console.log(responce.statusCode);

        responce.on("data", function(data){

            const weatherData= JSON.parse(data);
            
            const temp = weatherData.main.temp;
            console.log(temp);

            const weatherDescription= weatherData.weather[0].description;
res.write("<p>The weather is currently " + weatherDescription + "</p>");
res.write("<h1>The temperature in Paris is " + temp + " degrees Fahrenheit.</h1>");
res.send();
        });
    });
    

});

app.listen(3000,  function(){

    console.log("Server is running on port 3000!");

});