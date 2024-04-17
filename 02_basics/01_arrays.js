

// =============================================================== A R R A Y S ===========================================================

const myArr = [0, 1, 2, 3, 4, 5];

const heroes = ["Iron Man","Shakthiman","Minnal- Murali"];


const newArr = new Array(1,2,3,4,5);

// console.log(newArr);

// ----------------------------------------------------ARRAY METHODS----------------------------------------------------------------------

// ---------------------- P U S H --------------------------------------

newArr.push(6);
// console.log(newArr);

// ---------------------- P O P ----------------------------------------

newArr.pop(6);
// console.log(newArr);

// --------------------- U N S H I F T ---------------------------------

newArr.unshift(9)
// console.log(newArr);

// --------------------- S H I F T -------------------------------------

newArr.shift();
// console.log(newArr);

// --------------------- I N C L U D E S -------------------------------

// console.log(newArr.includes(9));


// --------------------- I N D E X -------------------------------------

// console.log(newArr.indexOf(3));

// --------------------- J O I N ----------------------------------------

const newArr1 = newArr.join();
// console.log(newArr1);

// ---------------------- S L I C E -------------------------------------

// console.log("A", newArr);

const myn1 = newArr.slice(1,3);

// console.log(myn1);

// console.log("B", newArr);

// ---------------------- S P L I C E -----------------------------------

const myn2 = newArr.splice(1,3);

// console.log(myn2);

// console.log("C", newArr);

 // -------------------------------------------- C O N C A T --------------------------------------------------


 const marvelHeros = ["Ironman","Thor","Black Widow"];
 const dcHeros     = ["Superman","Bat-Man","Flash"];

 //const allHeros = marvelHeros.concat(dcHeros);

 //console.log(marvelHeros.concat(dcHeros));

 // ----------------------------spread---------------------------------------------

 const allHeros = [...marvelHeros,...dcHeros];
//  console.log(allHeros);

// -----------------------------flat--------------------------------------------------

const anotherArray = [1, 2, 3, [4,5,6], 7 , [6,7, [4,5]]];

const newAnotherArray = anotherArray.flat(Infinity);

// console.log(newAnotherArray);

console.log(Array.isArray("Adithya"));
console.log(Array.from("Adithya"));

//--------------------------------------------------intresting-------------------------------
console.log(Array.from({name:"Adithya"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));



















// node 02_basics/01_arrays.js