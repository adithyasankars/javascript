

// -----------------------------------------------------------arrow-------------------------------------------

// const user = {
//     userName : "Adithya",
//     price:999,

//     welcomeMessage : function(){
//         console.log(`${this.userName} , Welcome to website.`);
//     }
// }

// current context

// user.welcomeMessage();
// user.userName = "Adithya";
// user.welcomeMessage();

// const chai = function(){
//     let userName = "Adithya";
//     console.log(this.userName);
// }

// chai();

// -------------output --- undefined

// const chai = () => {
//     let userName ="Adithya";
//     console.log(this.userName);

// }

// chai()

// -------------output --- undefined

// const chai = () => {
//     let userName ="Adithya";
//     console.log(this);

// }

// chai();

// -------------output ---- { } ----empty paranthesis


// () => {}

// const addTwo = (num1,num2) => {
//     return num1 + num2;                         // explicit when u use return
// }

// console.log(addTwo(3,4));

// ----------------------------basic  arrow function

// const addTwo = (num1,num2) => num1 + num2 // implicit return

// const addTwo = (num1,num2) => (num1 + num2) // if you use {} then you have to use return and
                                            //if u avoid the { } then you can use ()

// const addTwo = (num1,num2) => ({username:"Adithya"}) // object

// console.log(addTwo(3,4));




// node 03_basics/04_arrow.js