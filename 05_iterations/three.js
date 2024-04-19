

// for of

// ["","",""]

// [{},{},{}]

// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello World";

// for (const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }


// Maps

// const map = new Map();
// map.set('IN','INDIA');
// map.set('USA','AMERICA');
// map.set('FR','FRANCE');

// console.log(map);

// const map = new Map();
// map.set('IN','INDIA');
// map.set('USA','AMERICA');
// map.set('FR','FRANCE');
// map.set('IN','INDIA');

// no multiple entries

// for (const [key, Value] of map) {
//     console.log(key);
    
// }

// for (const key of map) {
//     console.log(key);
    
// }

// for (const [key, Value] of map) {
//     console.log(key , ";" , Value);
    
// }


const myObject = {
    'game1' :'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, Value] of myObject) {
//     console.log(key , ";" , Value);
    
// }

// but won't work as it says object can't be iterabale



// to get the key only ========= destructure


//console.log(map);

// node 05_iterations/three.js