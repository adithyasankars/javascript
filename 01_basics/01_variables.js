const accountId = 144553;
let accountEmail = "adithyaa@gmail.com";
var accountPassword = "123dede";
accountCity = "Jaipur";

// accountId = 2;  not allowed

accountEmail = "hc3353@gmail.com";
accountPassword = "2121212";
accountCity = "Bengaluru";

//console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);


// {
//     S C O P E
// }

// ------------------C O M M E N T S

/*
     PREFER NOT TO USE VAR, BECAUSE OF ISSUES IN 
     BLOCK SCOPE AND FUNCTIONAL SCOPE
*/

let accountState;

console.log(accountState); // ----------------- UNDEFINED

