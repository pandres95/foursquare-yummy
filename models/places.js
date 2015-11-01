'use strict';

module.exports = function (app) {
    var Q = q
    ,   fsClient = new app.plugins.Foursquare();

    this.explore = function (lat, lng, radius) {
        return Q.nbind(fsClient.Venues.explore, fsClient.Venues)(
            lat, lng, null,
            { section: 'food', radius: radius },
            undefined
        );
    };
};
