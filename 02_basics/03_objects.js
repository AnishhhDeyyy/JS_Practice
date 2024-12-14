// singleton
// Object.create this is singleton
//objects literals
const mysym = Symbol("key1")

const JsUser = {
    name: "Anish",
    "fullname":"AnishChandraDey",
    [mysym] : "mehhh",
    age: 20,
    location: "Madhyamgram",
    email: "ansh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.lastLoginDays.at(1));


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullname);
// console.log(JsUser["fullname"]);
// console.log(typeof JsUser["mysym"]);

JsUser.email = "anshhhh@gmail.com"
//Object.freeze(JsUser) // after that we cant change jsuser value
JsUser.email = "Ms@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Helllo JS USER");
    
}
console.log(JsUser);

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());

JsUser.greetingtwo = function(){
    console.log(`Hello Js User,${this.name},and ${this.email}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());








