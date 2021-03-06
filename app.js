const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function (req, res) {

    res.sendFile (__dirname  + "/index.html")

});

app.post("/", function(req,res){

const query = req.body.cityName;

apiKey = "bcd5953a34ae60d3a19dd457376dfad5";
const unit= "imperial";

const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units="  + unit + "&appid=" + apiKey;
https.get(url, function (responce) {
console.log(responce.statusCode);

responce.on("data", function (data) {
  const weatherData = JSON.parse(data);

  const temp = weatherData.main.temp;

  const weatherDescription = weatherData.weather[0].description;

  const icon = weatherData.weather[0].icon;

  imageURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

  res.write("<p>The weather is currently " + weatherDescription + "</p>");
  res.write(
    "<h1>The temperature in " + query +  " is " + temp + " degrees Fahrenheit.</h1>"
  );

  res.write("<img src =" +imageURL + ">" );
  res.send();
});
});
   
})



app.listen(3000, function () {
  console.log("Server is running on port 3000!");
});
