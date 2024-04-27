// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('Promise 2 is consumed.');
// })

// const promiseThree = new Promise (function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             username:"Adithya",
//             email:"adithya@gmail.com"
//         });
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user.username);

// });

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){

        let error = true;
        if(!error){
            resolve({
                username:"Adithya",
                passwor:"123"
            });
        }else{
            reject('ERROR: Something went wrong.');
        }
    },1000)
})

// promiseFour.then().catch()

const username = promiseFour.then((user) =>{
    console.log(user);
    return user.username;
})

console.log(username);

// node 09_advance_one/promises.js