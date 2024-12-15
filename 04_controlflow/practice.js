const maps = new Map()
maps.set(1,"Roman Reigns")
maps.set(2,"Cody Rhodes")
maps.set(3,"Seth Rollins")
console.log(maps);

for(let [key,value] of maps){
    console.log(maps.get(key))
}

maps.forEach((value,key)=>{           // first it takes value then it take key. this is how it is desgin
    console.log(`${key} ${value}`)
})


const arr = [1,2,4,5,6,7,9]
const printtme  = (val) =>{
  console.log(val)
}

arr.forEach(printtme)

const aer = [
    {
        userName : "Anish",
        email : "anishdey@gmail.com"
    },
    {
        userName : "Dipta",
        email  : "dipta@gmail.com"
    }
]

aer.forEach((obj) => {
  console.log(obj.userName)
  console.log(obj.email)
})

const greet = (num1,num2) => {
    console.log(num1 + num2);
}
greet(5,6)
