'use strict';

module.exports = function (app) {

    var yummy = new app.controllers.Yummy();

    return [
        {
            method: 'get',
            url: '/api/places',
            action: yummy.find,
            cors: true
        }
    ];

};
