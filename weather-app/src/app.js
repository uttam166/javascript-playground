const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


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
    res.render('index',{
        title: 'Welcome to sofcripto weather forcast.',
        name: 'uttam',
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'Must provide a address.'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, place_name} = {}) => {
        if(error){
            return res.send({ error });
        }

        forecast( latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({ error });
            }
            res.send({
                forecast : forecastData,
                place_name
            })
        });
        
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'uttam'
    })
})
app.get('*', (req, res) => {
    res.render('404',{
        errorMessage: 'page not found',
        title: '404 page',
        name: 'uttam'
    });
})

app.listen(3000, () =>{
    console.log('Server starts.')
})
