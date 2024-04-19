// reduce


const myNums = [1,2,3,4,5,6];

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 3);


// const myTotal = myNums.reduce( (acc,curr) => acc + curr, 3)
// console.log(myTotal);


const shoppingCart = [
    
    {
        itemName :"js course",
        price: 499
    },
    {
        itemName :"java course",
        price: 499
    },
    {
        itemName :"py course",
        price: 599
    },
    {
        itemName :"web dev course",
        price: 677
    },
];


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);

// node 05_iterations/eight.js