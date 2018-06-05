const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Sandip',
        //     age: 23
        // });
        reject('Somthing went wrong!');   
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('Error: ', error);
});

// promise.then((data) => {
//     console.log('2', data);
// });

console.log('after');
