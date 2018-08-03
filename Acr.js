//At the top of the `Acr.js` file, add code to read and set any environment variables with the dotenv package
require("dotenv").config();

//////////////////////////////////
//Load Required Node Modules //
////////////////////////////////
var acrcloud = require('acrcloud');;
var request = require('request');
var fs = require('fs');


//////////////////////////////////
//	Load the user acrcloud keys //
////////////////////////////////
var keys = require('./keys.js');
var acrKeys = keys.acrKeys;
var arcclient = new acrcloud({
    // required
    host: 'identify-us-west-2.acrcloud.com',
    access_key: keys.Access_Key,
    access_secret: keys.Access_Secret,
    // optional
    requrl: 'ap-southeast-1.api.acrcloud.com',
    http_method: 'POST',
    http_uri: '/v1/identify',
    data_type: 'audio',
    signature_version: '2',
    timestamp: Date.now()
});

const filePath = path.join(__dirname, '/my_song_1.mp3');
const sample = fs.readFileSync(filePath);

acrclient.identify(sample)
    .then(response => console.log(JSON.stringify(response, 3, ' ')))
    .catch(error => console.error(error));


//////////////////////////////////
//	Read in command line arguments //
////////////////////////////////