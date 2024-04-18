// -------------------------------------- F U N C T I O N S ---------------------------------

function sayMyName(){
    console.log("Adithya Sankar S");
}

// sayMyName();

// function addTwoNumbers(num1,num2){ // here it is called parameters
//     console.log(num1 + num2);
// }

// addTwoNumbers(3,4);  // here it is called arguments

function addTwoNumbers(num1, num2){

    // let result = num1 + num2;
    // return result;
    return num1 + num2
};

const result = addTwoNumbers(3,4)

// console.log("Result: ", result);

// function loginUserMesage(userName) {

//     if(userName === undefined){
//         console.log("Please enter a username");
//     }else{
//         return `${userName} just logged in`;

//     } 
// }

// function loginUserMesage(userName) {

//     if(!userName){
//         console.log("Please enter a username");
//     }else{
//         return `${userName} just logged in`;

//     } 
// }

// function loginUserMesage(userName = "sam") {

//     if(!userName){
//         console.log("Please enter a username");
//     }else{
//         return `${userName} just logged in`;

//     } 
// }

// console.log(loginUserMesage("Adithya"));
// console.log(loginUserMesage('"));
// console.log(loginUserMesage());

// function calculateCartPrice(...num1) {  // REST
//     return num1;
    
// }

function calculateCartPrice(val1, val2 ,...num1) {
    return num1;
    
}

// console.log(calculateCartPrice(299,399,899));

const user = {
    userName : "Adithya",
    price: 199
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}.`);
}

// handleObject(user);

// handleObject({
//     userName: "sam",
//     price:99
// });

const myNewArray = [200,300,400,500];

function returnSecondValue (getarray){
    return getarray[1];
}


console.log(returnSecondValue(myNewArray));

// node 03_basics/01_functions.js