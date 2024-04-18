

// --------------------------------scope----------------------------------------

function one() {

    const userName = "Adithya";

    function two() {
        const website = "Youtube";
        console.log(userName);
        
    }

    // console.log(website);

    two();
    
}

one();

addOne(3);

function addOne (num){
    return num + 1;
}

addTwo(2);

const addTwo = function (num) {
    return num + 2
}
