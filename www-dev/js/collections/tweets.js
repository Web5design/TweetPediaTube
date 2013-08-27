define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var TweetCollection = Backbone.Collection.extend({
        initialize: function (options) {
            this.handle = (options && options.handle) || 'pastawoua';
            this.url = '/api/twitter/' + this.handle;
        }
    });

    return TweetCollection;
});