

//  Immediately Invoked Function Expressions (IIFE)

// function coffee(){
//     console.log(`DB CONNECTED`);
// }

//  coffee();


 (function coffee(){

    // -------------named IIFI
    console.log(`DB CONNECTED`);
})();

// ()()------ to avoid the pollution in global scope 

( () => {
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Adithya');


 // node 03_basics/05_iife.js