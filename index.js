// Creating the  cats array
const cats = ["Milo", "Otis", "Garfield"];

// Appending to our cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

//Prepending entries to our cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

//Removing last cat from our array destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

//Removing first cat from our array 
function destructivelyRemoveFirstCat() {
  cats.shift();

}

//Append a cat to our cats array
function appendCat(name) {
  return [...cats,name];
}



//Prepend function that leaves our array unchanged
function prependCat(name) {
return [name,...cats];
}

//slicing last element in the array
function removeLastCat() {
  return cats.slice(0,cats.length - 1);
}

//slicing first cat item in the cats array
function removeFirstCat() {
  return cats.slice(1);
}