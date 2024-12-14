function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H")
    
}

//sayMyName()

// function addTwoNumbers(number1,number2){
// //   console.log(number1 + number2);
// if(typeof number1 == "string" || typeof number2 == "string"){
//     let no = Number(number1);
//     let no1 = Number(number2)
//     return no + no1
// }
//  return number1 + number2
// }

// const result = addTwoNumbers(2,"3")
// console.log(result);

// // addTwoNumbers(3,"a")

// function loginUserMessage(username="sam"){
//     if(username === undefined){
//        console.log("Pls Enter a Username");
//        return
       
//     }
//     return `${username} just logged in`
// }

// const ans = loginUserMessage()
// console.log(ans);


function calculateCartPrice(val1,val2,... num1){           // rest opeartor
    return num1;
}

console.log(calculateCartPrice(100,300,600));

const user = {
    userName : "Anish",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`); 
}

//handleObject(user)
handleObject({
    userName:"ANish",
    price:700
})

const myNewArray = [200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[2];
}

console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([100,200,600,900,10000]));



