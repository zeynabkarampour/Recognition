const ACRCloud = require('./src');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const acr = new ACRCloud({
    host: 'identify-us-west-2.acrcloud.com',
    access_key: process.env.ACCESS_KEY,
    access_secret: process.env.ACCESS_SECRET
});

const filePath = path.join(__dirname, '/my_song_1.mp3');
const sample = fs.readFileSync(filePath);

acr.identify(sample)
    .then(response => console.log(JSON.stringify(response, 3, ' ')))
    .catch(error => console.error(error));