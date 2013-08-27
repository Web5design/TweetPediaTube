// npm modules
var ntwitter = require('ntwitter');
var errorsHelpers = require('../../helpers/errors');

module.exports = function (app, config) {
    // Configure Twitter Client
    var twitter = new ntwitter({
        consumer_key: config.twitter.consumer_key,
        consumer_secret: config.twitter.consumer_secret,
        access_token_key: config.twitter.access_token_key,
        access_token_secret: config.twitter.access_token_secret
    });

    // Setup routes
    app.get('/api/twitter/:handle', function (req, res) {
        twitter.getUserTimeline({
            screen_name: req.params.handle
        }, function (err, data) {
            if (err) {
                errorsHelpers.send(res, 'Sorry, couldn\'t find any tweet.', 404);
            } else {
                res.send(data);
            }
        });
    });
};