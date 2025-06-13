function camelize(str) {
  return str //go straight to returning the string and manipulating it
    .split("-") //splits the string into an array and separates at the parameter
    .map(
      (
        word,
        index // a for each function for the array. word is the word we're at, index is the index.
      ) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)) // the body of the map function. if index is 0, then the word stays how it was,
      // else it takes the first char(at index 0) of the word, concatenates it with the rest of the word slices from index 1. string functions always returns a new string.
    )
    .join("");
}

function filterRange(arr, a, b) {
  return arr.filter((int) => int >= a && int <= b); //filter creates a new array with only the items that passes the boolean check
}

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let int = arr[i];
    if (!(a <= int && int <= b)) {
      arr.splice(i, 1); //splice removes 1 element from i index
    }
  }
}

function sortInDecreasingOrder(arr) {
  arr.sort((a, b) => b - a); //sort without parameters sorts based on Unicode so it will sort with strings. here we apply a compare function.
}

function copyAndSortArray(stringArr) {
  return stringArr.slice().sort(); //slice() with no parameters copies the whole array and since i know it's filled with strings, i can use.
}

function shuffleArray(arr) {
  const shuffled = [...arr];

  let currentIndex = shuffled.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex); // gets a random value BETWEEN 0 and currentIndex. Current index is always one higher than the last actual index of unsorted numbers.
    currentIndex--; // Moves the current index to the last actual index of unsorted numbers

    [shuffled[currentIndex],shuffled[randomIndex]] = [shuffled[randomIndex],shuffled[currentIndex]]; //switches the last unsorted number with a random number(can be itself)
  }
  return shuffled;
} 
