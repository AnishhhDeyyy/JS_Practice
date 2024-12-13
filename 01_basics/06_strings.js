const name = "Anish"
const repoCount = 50

console.log(`Hello my name is ${name} and my 
    repocount is ${repoCount}`);

const gameName = new String('Anish-De')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newStringOne = "      anish       ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));

console.log(gameName.split('-'));

