class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        // return 'Hi, I am ' + this.name + '!';
        return `Hi, I am ${ this.name }!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGretting() {
        let gretting = super.getGretting();
        if (this.homeLocation) {
            gretting += ` I am visiting from ${this.homeLocation}.`;
        }
        return gretting;
    }
}

const me = new Student('Sandip Pal', 26, 'Computer Science');
console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());

const other = new Student();
console.log(other);
console.log(other.hasMajor());
console.log(me.getDescription());


const me1 = new Traveler('Sandip Pal', 26, 'Philafrlphia');
console.log(me1);
console.log(me1.getGretting());

const other1 = new Traveler();
console.log(other1);
console.log(other1.getGretting());
