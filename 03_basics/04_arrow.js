

// -----------------------------------------------------------arrow-------------------------------------------

const user = {
    userName : "Adithya",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.userName} , Welcome to website.`);
    }
}

// current context

user.welcomeMessage();
user.userName = "Adithya";
user.welcomeMessage();