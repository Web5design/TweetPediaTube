define([
    'zepto',
    'underscore',
    'backbone',
    'views/tweets/list',
    'collections/tweets'
], function ($, _, Backbone, TweetListView, TweetCollection) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index'
        },
        initialize: function () {
            console.log('AppRouter: initialize');
        },
        index: function () {
            console.log('AppRouter: index');

            var tweets = new TweetCollection();

            new TweetListView({
                router: this,
                collection: tweets
            }).render();

            tweets.fetch();
        }
    });

    var initialize = function () {
        var router = new AppRouter();

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});