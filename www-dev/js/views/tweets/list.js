define([
    'zepto',
    'underscore',
    'backbone',
    'templates',
    'views/tooltip'
], function ($, _, Backbone, templates, ToolTipView) {
    var TweetListView = Backbone.View.extend({
        el: $('body'),
        initialize: function () {
            console.log('TweetListView: intialize');

            _.bindAll(this);

            this.collection.on('add', this.addTweet);

            this.addedTweets = 0;
        },
        render: function () {
            console.log('TweetListView: render');

            this.$el.append(templates['tweets.list']({
                handle: this.collection.handle
            }));

            this.$('.list').on('mouseup', this.onMouseUp);
        },
        onMouseUp: function () {
            console.log('TweetListView: onMouseUp');

            var text = this.getSelectedText();

            if (text) {
                if (this.ToolTipView) {
                    this.ToolTipView.close();
                }

                this.ToolTipView = new ToolTipView({
                    text: text,
                    parent: this.$el
                });

                this.ToolTipView.render();
            }
        },
        getSelectedText: function () {
            console.log('TweetListView: getSelectedText');

            var text;

            if (window.getSelection) {
                text = window.getSelection().toString();
            } else if (document.selection && document.selection.type !== 'Control') {
                text = document.selection.createRange().text;
            }

            return text;
        },
        addTweet: function (model) {
            console.log('TweetListView: addTweet');

            var tweet = $(templates['tweets.tweet'](model.toJSON()));
            this.$('.list').append(tweet);

            // Display tweets with a 100ms interval
            setTimeout(function () {
                tweet.addClass('visible');
            }, this.addedTweets * 100);

            this.addedTweets++;
        }
    });

    return TweetListView;
});