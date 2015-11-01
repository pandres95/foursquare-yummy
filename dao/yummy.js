'use strict';

module.exports = function(app){

    var places = new app.models.Places()
    ,   random = new app.plugins.Random();

    this.find = function (lat, lng, radius) {
        return places.explore(lat, lng, radius || 1000).then((data) => {
            var places = data.groups[0].items;
            return places[random.randomInt(0, places.length)];
        });
    };

};
