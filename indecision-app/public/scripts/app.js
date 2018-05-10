'use strict';

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log('Total Add', add(55, 1, 1001));

var user = {
    name: 'Sandip',
    cities: ['Kolkata', 'bangalore', 'Mombay'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        console.log(user.cities);
        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    },
    printPlacesLivedMap: function printPlacesLivedMap() {
        var _this2 = this;

        var citiesMap = this.cities.map(function (city) {
            return _this2.name + ' has lived in ' + city + '!';
        });
        return citiesMap;
    }
};

user.printPlacesLived();

console.log(user.printPlacesLivedMap());

var muliplier = {
    numbers: [10, 20, 30],
    multipleBy: 3,
    multiply: function multiply() {
        var _this3 = this;

        return this.numbers.map(function (number) {
            return number * _this3.multipleBy;
        });
    }
};

console.log(muliplier.multiply());
