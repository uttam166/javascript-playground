const request = require('request');

const forecast = (latitude, longitude, cb) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=2d67948c93607ad250245caf5cb50d76&units=metric';

    request({ url , json: true}, ( error, {body} ) => {
        if(error){
            cb('Unable to connect to weather services.', undefined)
        }else if (body.cod == 400){
            cb('unable to find the given location', undefined)
        } else{
            cb(undefined,{
                description : body.weather[0].description,
                temp : body.main.temp + " degree ",
                feels_like : body.main.feels_like + " degree " ,
                wind : body.wind.speed + " meter/sec ",
            })
        }
    })

}

module.exports = forecast;