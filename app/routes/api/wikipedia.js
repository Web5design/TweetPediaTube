// npm modules
var request = require('request');
var cheerio = require('cheerio');
var cheerioHelpers = require('../../helpers/cheerio');
var errorsHelpers = require('../../helpers/errors');

module.exports = function (app, config) {
    // Setup routes
    app.get('/api/wikipedia/:word', function (req, res) {
        request('http://en.wikipedia.org/wiki/' + req.params.word, function (err, resp, body) {
            var $ = cheerio.load(body);
            
            if (err || !cheerioHelpers.hasArticle($)) {
                errorsHelpers.send(res, 'Sorry, couldn\'t find any article.', 404);
            } else {
                res.send(JSON.stringify(cheerioHelpers.getMetaData($)));
            }
        });
    });
};