//Iterating
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];


// food.forEach(f => {console.log(f)})
food.forEach((food, number) => {
  console.log(food);
  console.log(number);
})

/*
Challenge:
Create a list (with an array) of movies 
Use .forEach() to list your movies  X
Add another movie at the end X
And replace one of your existing movies with another one 
*/

let movies = ['Phantom Menance', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

movies.forEach((movie) => {
  console.log(movie);
})
movies.push('Inception');
movies.splice(1, 1, 'Empire Strikes Back')
console.log(movies);

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
  console.log(el);
})
console.log(newArray);