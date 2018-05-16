console.log('Webpack runing...!');

// import './utils.js';
import substract, { squer, add } from './utils';
import isSenior, { isAdult, canDrink } from './person';

console.log(squer(4));
console.log(add(23, 10));
console.log(substract(292, 10));

console.log(isAdult(18));
console.log(canDrink(20));
console.log(isSenior(65));