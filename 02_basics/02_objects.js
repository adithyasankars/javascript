

// =========================================== O B J E C T S ==========================================================

// const jsUser = {
//     name:"Adithya",
//     age:23,
//     email: "adithya@gmail.com",
//     location: "Kottamom",

// }

// console.log(jsUser.email);
// console.log(jsUser["email"]); // ----------- correct way to access

const mySym = Symbol("key1");

const jsUser = {
    name:"Adithya",
    "full name " : "Adithya Sankar S",
    [mySym]: "myKey1", // [Symbol]
    age:23,
    email: "adithya@gmail.com",
    location: "Kottamom",

}

jsUser["email"] = "adithya3@gmail.com"

// console.log(jsUser);

// Object.freeze(jsUser);

jsUser["age"] = 22;

// console.log(jsUser);

jsUser.greeting = function (){
    console.log("Hello JS user");
}

jsUser.greeting2 = function (){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());





// node 02_basics/02_objects.js