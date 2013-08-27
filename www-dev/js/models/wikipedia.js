define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var WikipediaModel = Backbone.Model.extend({
        initialize: function (options) {
            this.url = '/api/wikipedia/' + options.text;
        }
    });

    return WikipediaModel;
});