/*
FOR IN LOOPS

Great for iterating over values in an object
*/

let student = {name: 'Christian', awesome: true, degree: 'JavaScript', week: 1};


for (let item in student) {
  console.log(item);
  console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmser', 'maine coon'];
//                0           1                   2           3
for (thingy in catArray){
  console.log(catArray[thingy]);
}

/*
Challenge:
Write a for in loop that capitalizes the first letter of a student's name
*/

let studentName = 'william';
let capName = '';

for (let ch in studentName){
  if (ch == 0) {
    capName = studentName[ch].toUpperCase();
  } else {
    capName = capName + studentName[ch].toLowerCase();
  }
  console.log(capName);
}
console.log(capName);