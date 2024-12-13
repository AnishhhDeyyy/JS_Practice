// const myArr = [0,1,2,3,4,5,true]
// // it is mixdatatype
// // it is resizable means dynamic
// // console.log(myArr[0]);

// const myArr2 = new Array(1,2,3,4)
// // console.log(myArr2);


// // Array Methods

// myArr.push(6,7) //add
// myArr.pop()       //delete

// // myArr.unshift(9)
// // console.log(myArr);

// // myArr.shift() // so first element will be out
// // console.log(myArr);

// // console.log(myArr.includes(9));

// // console.log(myArr.indexOf(3));

// const newArr = myArr.join() // it join and converted into string
// console.log(myArr);
// console.log(newArr); 


//slice , splice


const hell = [1,2,3,4,5,6];
console.log("A" + hell);

const sliccce = hell.slice(1,3)
console.log("After Slice" + sliccce)
console.log("A" + hell);

// console.log(hell.shift());
// console.log(hell);



const spliceee = hell.splice(1,3)
console.log("After Splice"+spliceee); // 2 3 4 will be deleted
console.log("A" + hell);



