define([
    'zepto',
    'underscore',
    'backbone',
    'templates',
    'collections/videos',
    'models/wikipedia'
], function ($, _, Backbone, templates, VideoCollection, WikipediaModel) {
    var ToolTipView = Backbone.View.extend({
        id: 'tooltip',
        initialize: function () {
            console.log('ToolTipView: intialize');

            _.bindAll(this);
        },
        render: function () {
            console.log('ToolTipView: render');

            this.$el.html(templates.tooltip({
                text: this.options.text
            }));

            this.options.parent.prepend(this.$el);

            var wikipedia = new WikipediaModel({
                text: this.options.text
            });
            wikipedia.on('sync', this.renderWikipedia);
            wikipedia.fetch();

            var videos = new VideoCollection({
                text: this.options.text
            });
            videos.on('sync', this.renderVideos);
            videos.fetch();

            this.$el.addClass('open');
            $('#page').addClass('open');
        },
        renderWikipedia: function (model) {
            console.log('ToolTipView: renderWikipedia');

            this.$el.append(templates['tooltip.wikipedia'](model.toJSON()));
        },
        renderVideos: function (collection) {
            console.log('ToolTipView: renderVideos');

            this.$el.append(templates['tooltip.videos']({
                videos: collection.toJSON()
            }));
        },
        close: function () {
            console.log('ToolTipView: close');

            $('#page').removeClass('open');

            this.undelegateEvents();
            this.remove();
        }
    });

    return ToolTipView;
});