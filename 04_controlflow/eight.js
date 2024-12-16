const shoppingcart = [10,15,14]

const myTotal = shoppingcart.reduce(function(acc,currval){ //Mainly for sum purpose
    return acc + currval
},0)
console.log(myTotal)

const myTotall = shoppingcart.reduce((acc,currval)=>acc+currval,0)
console.log(myTotall)

const so = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const newso = so.reduce((acc,item)=>(acc+item.price),0)
console.log(newso);

