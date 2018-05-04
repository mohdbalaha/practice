// let buildDeck =[];
// let cards=['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
// let format = ['hearts', 'spades', 'diamonds', 'clubs'];
// for (let item1 of ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']){
//   for(let item2 of ['hearts', 'spades', 'diamonds', 'clubs']){
//     buildDeck.push(`${item1} of ${item2}`)
//   }
// }
// console.log(buildDeck);

// let buildDeck =['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'].map(item1=>['hearts', 'spades', 'diamonds', 'clubs'].map(item2=>`${item1} of ${item2}`)).join().split(',');
let buildDeck =[].concat(['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'].map(item1=>['hearts', 'spades', 'diamonds', 'clubs'].map(item2=>`${item1} of ${item2}`)));
console.log(buildDeck);