var youtube = require('youtube-feeds');
var errorsHelpers = require('../../helpers/errors');

// npm modules
module.exports = function (app, config) {
    // Setup routes
    app.get('/api/youtube/:word', function (req, res) {
        youtube.feeds.videos({
            q: req.params.word,
            'max-results': 1
        }, function (err, data) {
            if (err) {
                errorsHelpers.send(res, 'Sorry, couldn\'t find any video.', 404);
            } else {
                res.send(data.items);
            }
        });
    });
};