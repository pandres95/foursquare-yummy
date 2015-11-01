'use strict';

module.exports = function(app){

    var Yummy   = app.dao.Yummy
    ,   json    = new app.views.Json();

    this.find = function(req, res, next){
        var yummy = new Yummy();
        json.promise(
            yummy.find(req.query.lat, req.query.lng, req.query.radius),
            res, next
        );
    };

};
