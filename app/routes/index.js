module.exports = function (app, config) {
    require('./api/twitter')(app, config);
    require('./api/wikipedia')(app, config);
    require('./api/youtube')(app, config);
};