var express = require('express');
var router = express.Router();

var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '0f548ed7dd8c4dc5a6c39562de4135d7'; // Your client id
var client_secret = 'fc345574f2dc4c8aa96a4eba32ca86d7'; // Your secret
var redirect_uri = 'http://localhost:3000/users/'; // Your redirect uri

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/callback', function(req, res) {
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri: redirect_uri,
            grant_type: 'authorization_code',
            client_id: client_id,
            client_secret: client_secret
        },
        json: true
    };

    router.post(authOptions, function (req,res) {
        var access_token = body.access_token.toString();
        var token_type = "Bearer";
        var refresh_token = body.refresh_token.toString();
    });

    app.get('/refresh_token', function(req, res) {

        // requesting access token from refresh token
        var refresh_token = req.query.refresh_token;
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
            form: {
                grant_type: 'refresh_token',
                refresh_token: refresh_token
            },
            json: true
        };

    router.post(authOptions, function (err, res, body) {
        var access_token = body.access_token;
        res.send({
          'access_token': access_token
        });
    })
    })


});

module.exports = router;
