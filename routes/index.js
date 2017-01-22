var express = require('express');
var router = express.Router();

var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '0f548ed7dd8c4dc5a6c39562de4135d7'; // Your client id
var client_secret = 'fc345574f2dc4c8aa96a4eba32ca86d7'; // Your secret
var redirect_uri = 'http://sedcash.herokuapp.com/users/callback'; // Your redirect uri


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coincidence' });
});

router.get('/login', function(req, res) {
    var scope = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
        }));
})

module.exports = router;
