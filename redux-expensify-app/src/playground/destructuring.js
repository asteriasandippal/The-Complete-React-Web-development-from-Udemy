console.log('Destructuring...');

// Object Destructuring

const person = {
    name: 'Sandip',
    age: 31,
    location: {
        city: 'Bangalore',
        temp: 87
    }
}

const { name : firstName = "Ashok", age } = person;

console.log(`${firstName} is ${age}`);

const { city, temp : temperature } = person.location;

if (city && temperature) {
   console.log(`It's ${temperature} in ${city}`); 
}

const Book = {
    title: 'Ego is the Enemy',
    author: 'Sandip Pal',
    publisher: {
        name: 'Perguin'
    }
};

const { name: publisherName = 'Self-Publisher' } = Book.publisher;

console.log(publisherName);


// Array Desuructuring

const address = ['1299 Jniper Stree', 'bangalore', 'India', '19832'];

// const [street, cityName, state, zip] = address;
const [, cityName, state = 'New York'] = address;

console.log(`You are in ${cityName} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
