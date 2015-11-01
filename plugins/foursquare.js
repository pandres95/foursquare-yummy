'use strict';

module.exports = function (app) {
    var Foursquare = app.utilities['node-foursquare'];
    return new Foursquare(app.configuration.get('foursquare'));
};
