// function Person(name,age){
//     this.name = name;
//     this.age = age;

//     this.greet = function(){
//         console.log(`Hello,my name is ${this.name},my age is ${this.age}`);
    
        
//     }
// }

//     const Person1 = new Person('Anish',20);
//     Person1.greet();

const regularuser = {
    email : "anish@gmail.com",
    fullname : {
        userfullName: {
            first_name : "Anish",
            second_name : "Dey"
        }
    }
}
//console.log(regularuser.fullname.userfullName.first_name);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1,...obj2} //spread
//console.log(obj3);
const users = [
    {
        id : 1,
        email: "anush#gmail.com"
    },
    {

    }
]
 //console.log( users[1].email);

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggeIn'))

for(let key in tinderUser){
    console.log(`${key},${tinderUser[key]}`);
    
} // loops in objects



