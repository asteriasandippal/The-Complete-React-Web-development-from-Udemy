'use strict';

var squre = function squre(x) {
    return x * x;
};
console.log(squre(8));

var squreArrow = function squreArrow(x) {
    return x * x;
};
console.log(squreArrow(8));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Sandip Pal'));
