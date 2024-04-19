

// const myNums = [1,2,3,4,5];

// const newNums = myNums.map( (nums) => nums + 10);

// console.log(newNums);


// MAPS

// chaining


const myNums = [1,2,3,4,5];

const newNums = myNums
    .map((nums) => nums * 10)
    .map((nums) => nums + 1)
    .filter((nums) => nums >=30);


console.log(newNums);



// node 05_iterations/seven.js