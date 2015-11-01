'use strict';

module.exports = function () {
    this.randomInt = function(low, high) {
        return Math.floor(Math.random() * (high - low) + low);
    };
};
