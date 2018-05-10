var nameVar = "Sandip";
var nameVar = "Rayel";
console.log('nameVar', nameVar);

let nameLet = "Jane";
nameLet = "Julei";
console.log('nameLet', nameLet);

const nameConst = "Frank";
// const nameConst = "Guther";
console.log('nameConst', nameConst);

var fullName = "Sandip Pal";

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log('Inside', firstName);
}

console.log('Outside', firstName);
