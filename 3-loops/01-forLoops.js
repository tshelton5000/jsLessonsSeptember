/*
CLASSIC FOR LOOPS
*/

//Loop Variations
//For statement
//Do while statement
//while statement
//labeled statement
//break statement
//continue statement
//for in statement
//for of statement

//counted from 0 - 9 by 1's
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//count from 0 - 20, by 2's
for (let i = 0; i <= 20; i = i + 2){
  console.log(i);
}

//Challenge: using a for loop, count from 10 to 0, going down by 1's
for (let x = 10; x >= 0; x--/*x = x - 1*/){
  console.log(x);
}

//Challenge: using a for loop, count from 0, going down by 2's to -24
for (let i = 0; i >= -24; i+=-2){
  console.log(i);
}

// Challenge: using a for loop, go through a name and display 
//each letter individually
let name = 'Kenn';
//  k: 0, e: 1, n: 2, n: 3

for (let i = 0; i < name.length; i++){
  console.log(name[i]);
}

/*
Challenge: 
Make a for loop where you add up all the numbers from 1 
to 50 (should equal 1275)
*/

let string = '';

for (let i = 1; i<=50; i++){
  string = string + i;
}

console.log(string);