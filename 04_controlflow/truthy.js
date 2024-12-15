//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
// "0",'false'," ",[],{},function(){}

// if array is empty

const userName = []
if(userName.length === 0){
    console.log("Array Is Empty");
}else{
    console.log("Not Empty");
    
}

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("Object is Empty");
}else{
    console.log("Object is not Empty");
    
}

//Ternary Operator
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("less than 80");


