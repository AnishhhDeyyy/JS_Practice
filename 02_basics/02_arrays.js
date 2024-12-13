// const wwe_heros = ["roman","seth","tiffy"]
// const aew_heros = ["mox","hangman","mone"]

// // wwe_heros.push(aew_heros)
// // console.log(wwe_heros);
// // console.log(wwe_heros[3][1]);

// // const combined_heros = wwe_heros.concat(aew_heros)
// // console.log(combined_heros);

// //spread operator
// // const allHeros = [...wwe_heros,...aew_heros]
// // console.log(allHeros);


// const anotherarr = [1,2,3,[4,5,6],7,8,[6,7,[4,5]]]

// const real = anotherarr.flat(Infinity) // it makes another arr into one single arr(arr under arr under arr) , here infinty means flat will check how much will be depth
// console.log(real)

// console.log(Array.isArray("Anish")); // is it array or not[boolean]

// console.log(Array.from("Anish")); // create array and break the string into character

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3));

// const l1 = ["wwe","aew"]
// const l2 = ["product","order"]
// const l3 = ["tudip","Inforsus"]
// l4 = [...l1,...l2,...l3]
// console.log(l4);


const myvehcile = {
    brand : "Ford",
    model : "Mustang",
    color : "red"
}

const updatedvehcile = {
    type : "car",
    year : 2021,
    color : "yellow"
}

const myup = {...myvehcile,...updatedvehcile}
console.log(myup)


