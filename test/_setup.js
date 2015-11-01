'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('com.example.foursquare_yummy', [ 'node-foursquare' ])
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-nomodel')
    .run();
