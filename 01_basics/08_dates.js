// ==============================================  D A T E S ==================================================

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let newDate = new Date (2023, 0, 24);
// let date2 = new Date ("2023-01-23");

// console.log(date2.toDateString());

let myCreatedDate = new Date("01-14-2023");

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.toDateString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    

}));


















// node 01_basics/08_dates.js