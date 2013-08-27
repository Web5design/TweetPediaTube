// npm modules
var _ = require('underscore');
var twitter = require('./twitter');

var config = {
    twitter: twitter
};

var production = {
    port: 8080,
    folder: __dirname + '/../www'
};

var development = {
    port: 3000,
    folder: __dirname + '/../www-dev'
};

// Export environement specific configuration
module.exports = process.env.NODE_ENV === 'production' ? _.extend(config, production) : _.extend(config, development);