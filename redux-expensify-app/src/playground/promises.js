const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Sandip',
            age: 23
        });
        // reject('Somthing went wrong!');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is nasted callback function');
        }, 5000);
    });
}).then((str) => {
    console.log('This is other CallBack', str);
}).catch((error) => {
    console.log('Error: ', error);
});

// promise.then((data) => {
//     console.log('2', data);
// });

console.log('after');
