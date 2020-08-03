const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');
const place_name = document.querySelector('#place_name');
const description = document.querySelector('#description');
const temp = document.querySelector('#temp');
const feels_like = document.querySelector('#feels_like');
const wind = document.querySelector('#wind');



weatherForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const searchFor = searchInput.value;
    // console.log(searchFor);
    place_name.textContent = "";
    description.textContent = "Loading...";
    temp.textContent = "";
    feels_like.textContent = "";
    wind.textContent = "";

    fetch('http://localhost:3000/weather?address='+searchFor).then((response) => {
        response.json().then((data) => {
            if(data.error){
                description.textContent = data.error;
                console.log(data.error)
            } else {
                place_name.textContent = 'See for : '+data.place_name;
                description.textContent = 'Description : '+data.forecast.description;
                temp.textContent = 'Temperature : '+data.forecast.temp;
                feels_like.textContent = 'Feels like : '+data.forecast.feels_like;
                wind.textContent = 'Wind : '+data.forecast.wind;
                
            }
        })
    })
})