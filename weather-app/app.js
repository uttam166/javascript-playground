
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = 'mekhliganj';

if(!address){
    return console.log('Please provide an address.')
}else{
    geocode(address, (error, data) => {
        if(error){
            return console.log(error);
        }

        forecast( data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(data.place_name);
            console.log(forecastData);
        });
        
    })
}