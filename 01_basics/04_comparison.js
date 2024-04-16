

// console.table([ 2 > 1, 2>=1,2 < 1, 2 == 1, 2!= 1]);

// node 01_basics/04_comparison.js


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// ouput
// false, false, true

/* The reason is that an equity check == and comparison >, <, >=, <=
work differentl.
Comparisons convert null to a number, treating it as zero.
Thats whay 3 null >=0 is true qnd null > 0 is false. */


// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// ===  S T R I C T  C H E C K

console.log( "2" ===2 );



