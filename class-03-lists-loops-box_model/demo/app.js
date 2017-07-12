'use strict';

// Arrays

var myCats = ['BuddyCat', 'Alistair', 'Trillian'];
// "var myCats" is a variable declaration
// "= ['BuddyCat', 'Alistair', 'Trillian']" is an assignment
// The "=" sign is called an assignment operator

var randomCrap = [true, 4, 'WTF', myCats];

// We use 'for' loops to iterate over arrays

// for(a var holding a starting index; how many times; increment){
//  stuff to do to each array element
// }

// for(condition){
//   execute the code in this code block
// }

for(var i = 0; i < myCats.length; i++) {
  alert(myCats[i].toUpperCase());
}

// i++ is an incrementer; "++" is the "increment operator"

for(var i = 0; i < myCats.length; i++) {
  if(myCats[i] === 'Trillian'){
    console.log('Trill!!!!')
  } else {
    console.log(':-( not Trill :-(')
  }
}

// if(condition is true){
//   do the stuff in the code block
// }

// if(condition is true){
//   do the stuff in the code block
// } else {
//   do this other stuff
// }

// if(condition is true){
//   do the stuff in the code block
// } else if (this other condition is true) {
//   do this other stuff
// } else {
//   do this last thing as a catch-all case
// }

// while(condition is true){
// keep doing this stuff in the code block until the condition is false
// }

var x = 0
while(x < 7){
  console.log('x =', x);
  x++;
}

var y = 0;
do {
  console.log(y, 'is the value of y');
  y++
} while (y < 0);
