const objj = {
    js : "Javascript",
    cpp :"c++",
    rb :"ruby"
}
for(const key in objj){
    console.log(`Key is ${key} and shortcut is ${objj[key]}`);
}


// const myArr = [45,20,89,78,65,100]
// myArr.forEach(function(val){
//     console.log(val);
    
// })

// const myArro = [65,78,98,100,102]
// myArro.forEach((item)=>{
//   console.log(item);
  
// })

// const hello = [65,8,95,100,145]
// hello.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

function printme(val){
  console.log(val);
  
}

const helloone = [1,2,3,4,5]
helloone.forEach(printme)