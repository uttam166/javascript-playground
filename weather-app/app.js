const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=26.732311&lon=88.410286&appid=2d67948c93607ad250245caf5cb50d76&units=metric';

request({ url , json: true}, ( error, response ) => {
    const description = response.body.weather[0].description;
    const temp = response.body.main.temp + " degree ";
    const feels_like = response.body.main.feels_like + " degree " ;
    const wind = response.body.wind.speed + " meter/sec ";
    // console.log(wind);
})

const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/siliguri.json?access_token=pk.eyJ1IjoidXR0YW0xNjYiLCJhIjoiY2tkZDE3NjNjMTNjajJybXpxNXdjeGZzbSJ9.GAuUH-nff7spTLs5U8OHHw&limit=1";

request({ url: geocodeUrl , json: true}, ( error, response ) => {
   const place_name = response.body.features[0].place_name;
   const longitude = response.body.features[0].center[0];
   const latitude = response.body.features[0].center[1];
   
   console.log(longitude,latitude);
})