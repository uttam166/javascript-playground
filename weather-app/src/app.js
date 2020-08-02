const express = require('express');
// const geocode = require('./utils/geocode');
// const forecast = require('./utils/forecast');


const app = express();

app.get('/',(req, res) => {
    res.send('hello there!')
})

app.get('/weather', (req, res) => {
    res.send('weather');
})

app.listen(3000, () =>{
    console.log('Server starts.')
})




// const address = 'siliguri';

// if(!address){
//     return console.log('Please provide an address.')
// }else{
//     geocode(address, (error, {latitude, longitude, place_name}) => {
//         if(error){
//             return console.log(error);
//         }

//         forecast( latitude, longitude, (error, forecastData) => {
//             if(error){
//                 return console.log(error);
//             }
//             console.log(place_name);
//             console.log(forecastData);
//         });
        
//     })
// }