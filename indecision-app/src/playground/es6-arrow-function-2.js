const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log('Total Add', add(55, 1, 1001));

const user = {
    name: 'Sandip',
    cities: ['Kolkata', 'bangalore', 'Mombay'],
    printPlacesLived() {
        console.log(this.name);
        console.log(user.cities);
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        })
    },
    printPlacesLivedMap() {
        const citiesMap = this.cities.map(city => {
            return this.name + ' has lived in ' + city + '!';
        });
        return citiesMap;
    }
}

user.printPlacesLived();

console.log(user.printPlacesLivedMap());


const muliplier = {
    numbers: [10, 20, 30],
    multipleBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multipleBy);
    }
}

console.log(muliplier.multiply());
