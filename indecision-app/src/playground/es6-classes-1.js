class Person {
    constructor(name = 'Anonymous', age = 0) {
        console.log(name);
        console.log('Constructor');
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

const me = new Person('Sandip Pal', 26);
console.log(me);
console.log(me.getGretting());
console.log(me.getDescription());

const other = new Person();
console.log(other);
console.log(other.getGretting());
console.log(other.getDescription());
