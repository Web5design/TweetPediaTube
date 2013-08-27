define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var VideoCollection = Backbone.Collection.extend({
        initialize: function (options) {
            this.url = '/api/youtube/' + options.text;
        }
    });

    return VideoCollection;
});