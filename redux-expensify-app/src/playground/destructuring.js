console.log('Destructuring...');

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