const path = require('path');
const express = require('express');
const hbs = require('hbs');
// const geocode = require('../utils/geocode');
// const forecast = require('../utils/forecast');


const app = express();

// define paths for express config. 
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup hbs engine and views location
app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup static dir to server.
app.use(express.static(publicDirPath));


app.get('/',(req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.send('weather');
})

app.listen(3000, () =>{
    console.log('Server starts.')
})




// const address = 'new delhi';

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