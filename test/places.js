/* global describe, before, it */
'use strict';

describe('Places', function () {
    var bool = require('bool.js')
    ,   BoolError, model, dao;

    before(() => {
        return bool('com.example.foursquare_yummy').run().then((api) => {
            model = new api.app.models.Places();
            dao = new api.app.dao.Yummy();
            BoolError = api.app.Error;
        });
    });

    describe('Models', () => {

        it('Explore places', () => {
            return model.explore('4.635511', '-74.070194', 1000);
        });
    });

    describe('DAO', () => {

        it('Get a random place', () => {
            return dao.find('4.635511', '-74.070194').then((_data) => {
                if(!(_data instanceof Object)) throw new BoolError(
                    0, 'not_object', 'Data is not an instance of Object'
                );
            });
        });
    });

});
