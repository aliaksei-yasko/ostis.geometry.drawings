/**
 * Point model.
 */

Drawings.Point = function Point(x, y) {
    this.id = Drawings.Utils.randomUUID();
    this.x = x;
    this.y = y;
    this.name = '';
};

Drawings.Point.prototype = {

    getId: function () {
        return this.id;
    },

    setId: function(id) {
        this.id = id;
    },

    getX: function () {
        return this.x;
    },

    setX: function (x) {
        this.x = x;
    },

    getY: function () {
        return this.y;
    },

    setY: function (y) {
        return this.y = y;
    },

    setXY: function (x, y) {
        this.x = x;
        this.y = y;
    },

    getName: function () {
        return this.name;
    },

    setName: function (name) {
        this.name = name;
    }
};