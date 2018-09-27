/*
Challenge:
Write a for loop running between the numbers 0 - 100
For multiples of 3, instead of the number, console.log "Fizz"
For multiples of 5 console.log "Buzz";
For numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
For any other number, console.log the value
*/

for (let i = 0; i < 101; i++){
  if (i%3 == 0 && i % 5 == 0){
    console.log('Fizz Buzz');
  } else if (i%3 == 0) {
    console.log('Fizz');
  } else if (i%5 == 0){
    console.log('Buzz');
  } else {
    console.log(i);
  }
}