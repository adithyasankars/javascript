// const name = "Adithya";

// const repoCount = 24;

// console.log(name + repoCount + " Value");



// node 01_basics/06_strings.js

// ======================= the modern way of writing strings ==========================

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);


const gameName = new String (`Adit-hya`);

// console.log(gameName);

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf(`t`));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(0,4);
// console.log(anotherString);

const string1 = `    Adithya  `;
// console.log(string1);
// console.log(string1.trim());

const url = "https://www.google%20.com";

// console.log(url.replace(`%20`,`-`));

// console.log(url.includes('sundar'));
// console.log(url.includes(`google`));

console.log(gameName.split(`-`));