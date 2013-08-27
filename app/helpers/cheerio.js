var cheerio = {
    hasArticle: function ($) {
        var article = $('#noarticletext').length === 0 ? true : false;
        
        return article;
    },

    getMetaData: function ($) {
        var description = $('#mw-content-text p').eq(0).text().replace(/\[[0-9]*\]/gi, '');
        var image = $('#mw-content-text .infobox .image img').eq(0).attr('src');

        var data = {
            description: description
        };
        if (image) {
            data.image = 'http:' + image;
        }

        return data;
    }
};

module.exports = cheerio;