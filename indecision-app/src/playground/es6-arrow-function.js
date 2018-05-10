const squre = function(x) {
    return x * x;
}
console.log(squre(8));

const squreArrow = x => x * x;
console.log(squreArrow(8));

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('Sandip Pal'));