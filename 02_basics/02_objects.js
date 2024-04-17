

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
// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());



const tinderUser = new Object() // SINGLETON OBJECT

tinderUser["id"] = "123abc";
tinderUser["name"] = "Sammy";
tinderUser["isLoggedIn"] = false;

// console.log(tinderUser);

const regularUser = {
    email : "adi@gmail.com",
    fullname : {
        userFullName: {
            firstName: "Adithya",
            lastname:"Sankar S"
        }
    }
}

// console.log(regularUser.fullname);

// console.log(regularUser.fullname?.userFullName); // if the fullName doesn't exsist


const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign(obj1,obj2);

// const obj3 = Object.assign({}, obj1, obj2) // {}------------target and then the source

const obj3 = {...obj1,...obj2};

// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// console.log(obj3);

// -----------------------------------------------------destructuring-----------------------------------------

const course = {
    courseName : "JS",
    courseIntructor : "Adithya",
    coursePrice : 999
}


// course.courseInstructor

const {courseIntructor : instructor} = course;
//console.log(courseIntructor);

console.log(instructor);











// node 02_basics/02_objects.js