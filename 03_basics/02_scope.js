// let a = 10
// const b = 20
// var c = 30 //global scope

if(true){
    let a = 10
    const b = 30
    var c = 40         //local Scope
}

//console.log(a);
//console.log(b);
console.log(c);

function one(){
    const userName = "Anish"

    function two(){
        const website = "Youtube"
        console.log(userName);
        
    }
   // console.log(website);

    two()
    
}
//one()

if(true){
    const username = "Ansh"
    if(true){
        const website = " youtube"
        console.log(username + website);
        
    }
}

console.log(addOne(5))
function addOne(num){
    return num+1
} // function

//console.log(addTwo(5));  => not possible it is expression

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))






