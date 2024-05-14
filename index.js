

const fs = require('node:fs')
const express = require('express');
const { error } = require('node:console');


const app = express()

let result = [];

const api_k = 'USRiN8YnZegtjFr1O6zz_uFj67pemWeI1GdCPVLb3Nc'
const baseURL = 'https://api.unsplash.com/photos/random?client_id=' + api_k;

function randomImage() {

    fetch(baseURL)
    .then(response=>response.json())
    .then(data=> {
        // console.log(data);
        
        const tempData = {
            url: data.urls.full,
            description: data.alt_description
        };

        result = []

        // console.log(tempData);

        result.push(tempData)

    })
    .catch((error) => {
        console.log('ERROR = ' , error);
    }) 

}


app.get('/random-Image', (request, response) => {
    randomImage();
    response.json(result)
})


app.listen(8080, () => {
    console.log('Server is running at port 8080');
})





