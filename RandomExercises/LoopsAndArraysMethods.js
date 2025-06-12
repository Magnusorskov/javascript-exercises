function camelize(str) {
  return str //go straight to returning the string and manipulating it
    .split("-") //splits the string into an array and separates at the parameter
    .map((word, index) => // a for each function for the array. word is the word we're at, index is the index.
      index == 0 ? word : word[0].toUpperCase() + word.slice(1) // the body of the map function. if index is 0, then the word stays how it was, 
      // else it takes the first char(at index 0) of the word, concatenates it with the rest of the word slices from index 1. string functions always returns a new string.
    )
    .join("");
}
