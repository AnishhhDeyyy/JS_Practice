// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleDateString());

// let anotherDate = new Date("01-14-2023")
// console.log(anotherDate);

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// //convert to second

// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDate()+1);

//`${newDate.getDay()}`
// customize the timestamp
console.log(
newDate.toLocaleDateString('default',{
    weekday: "long"

}));







