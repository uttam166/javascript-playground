
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = 'siliguri';

if(!address){
    return console.log('Please provide an address.')
}else{
    geocode(address, (error, {latitude, longitude, place_name}) => {
        if(error){
            return console.log(error);
        }

        forecast( latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(place_name);
            console.log(forecastData);
        });
        
    })
}