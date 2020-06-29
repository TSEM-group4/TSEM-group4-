const request = require('request');
const config = require('../config.js');
const bodyParser = require('body-parser');

const save = require('../server/db/index');

//retrive songs depending on the mood
let getSongs = (genre,callback) => {
 
  let options = {
    url: 'https://api.spotify.com/v1/playlists/'+playlist_id+'/traks',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, function (error, response, body) {
    callback(body);
  });

}

module.exports.getSongs = getSongs;