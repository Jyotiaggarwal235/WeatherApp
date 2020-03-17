const request = require('request');
let apiKey = '20a0b0565ec025d04b87b41b57808242';
const argv = require('yargs').argv;
let city = argv.c || 'Delhi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});