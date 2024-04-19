const myObject = {

    js: 'Javascript',
    cpp: 'C++',
    rb : 'Ruby',
    swift : "Swift by apple"
}

// for (const key in myObject){
//     console.log(key);
// }
// for (const key in myObject){
//     console.log(myObject[key]);
// }

// for (const key in myObject){
//     console.log(`${key}, shortcut is for ${myObject[key]}`);
// }

const programming = ["js","rb","py","java","cpp"];

for (const key in programming) {
    console.log(key);
}

// --- output = 0,1,2,3,4

// node 05_iterations/four.js