/*
IF ELSE
*/

weather = 75;

if (weather < 70){
  console.log('Wear a jacket');
} else {
  console.log('No jacket necessary!');
}

/*
Challenge: 
Write an if else statement that checks your name; 
If it is your name, console.log 'Hello, my name is <your name>'; 
If the name does not match, console.log 'Hello, what is your name?'
*/

let name = 'Walter';

if (name !== 'Walter'){
  console.log('Hello, what is your name?');
} else {
  console.log('Hello, my name is Walter.');
}

let name = 'William Bailey';

if (name == 'William Bailey IV'){
  console.log('This is William Bailey IV');
} else {
  console.log('ACCESS DENIED: THIS IS NOT WILLIAM BAILEY IV');
}

/*
 Challenge: 
Capitalize the FIRST LETTER of name ONLY
*/

let name = 'cRaZy' //output -> Crazy

function name(string){
  // console.log(string.charAt(0).toUpperCase());
  // console.log(string.slice(1).toLowerCase());
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(name('jOsH'));

let name = 'tYlEr';

if (name[0] == name[0].toUpperCase()){
  firstLetter = name[0] + name.slice(1).toLowerCase();
  console.log(firstLetter);
} else {
  otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  console.log(otherLetters);
}

/*
ELSE IF
*/

/* 
Challenge:
Set a variable age and give it an age of your choice
Set an else if statement that convey the following:
If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
If the age is at least 18, console.log 'Yay! You can vote!'
If the age is at least 21, console.log 'Yay! You can drink!'
If the age is at least 25, console.log 'Yay! You can rent a car!'
*/

let age = 29;

if (age < 18) {
  console.log('sorry, too young!')
} else if (age >= 18 && age < 21) {
  console.log('yay, you can vote!')
} else if (age >= 21 && age < 25){
  console.log('yay, you can drink!')
} else {
  console.log('yay, you can rent a car!')
}

let age = 32;

if (age >= 25) {
  console.log('yay, you can rent a car!')
} else if (age >= 21) {
  console.log('yay, you can drink!')
} else if (age >= 18) {
  console.log('yay, you can vote!')
} else {
  console.log('sorry, you\'re a youngin')
}