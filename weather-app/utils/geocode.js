const request = require('request');

const geocode = ( address, cb ) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoidXR0YW0xNjYiLCJhIjoiY2tkZDE3NjNjMTNjajJybXpxNXdjeGZzbSJ9.GAuUH-nff7spTLs5U8OHHw&limit=1";

    request({ url , json: true}, ( error, response ) => {
        if(error){
            cb('Unable to connect to location services.', undefined)
        }else if (response.body.features.length === 0){
            cb('unable to find the given location. Try anathor search.', undefined)
        } else{
            cb(undefined, {
            place_name : response.body.features[0].place_name,
            longitude : response.body.features[0].center[0],
            latitude : response.body.features[0].center[1],
            })
        }
    })
}

module.exports = geocode;