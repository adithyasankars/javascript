const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Promise 2 is consumed.');
})

// node 09_advance_one/promises.js