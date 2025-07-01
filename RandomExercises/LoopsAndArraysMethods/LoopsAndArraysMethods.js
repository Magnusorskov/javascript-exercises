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

        [shuffled[currentIndex], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[currentIndex],
        ]; //switches the last unsorted number with a random number(can be itself)
    }
    return shuffled;
}

function filterUniqueArrayMembers(arr) {
    let arrayMembersSet = new set(); //create an empty set
    for (let str of arr) { //for each function
        arrayMembersSet.add(str); //adds to set, only unique items can be in a set
    }
    return [...arrayMembersSet]; //copies the content of the set to an array and returns it
}

// this is a shortened version:

/*function filterUniqueArrayMembers(arr) {
  return [...new Set(arr)]; 
}*/

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let users = [ john, pete, mary ];
function mapToNames(arrayOfUsers) {
    return arrayOfUsers.map(user => user.name);
}

// console.log(mapToNames(users))

//----------------------------

let john = {name: "John", surname: "Smith", id: 1};
let pete = {name: "Pete", surname: "Hunt", id: 2};
let mary = {name: "Mary", surname: "Key", id: 3};

let users = [john, pete, mary];

let usersMapped = users.map(user =>
    ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith

//------------------
john = {name: "John", age: 25};
pete = {name: "Pete", age: 30};
mary = {name: "Mary", age: 28};

let arr = [pete, john, mary];

function sortAgeByUsers(userArray) {
    userArray.sort((a, b) => a.age - b.age);
}

sortAgeByUsers(arr);
console.log(arr);

//------------
john = {name: "John", age: 25};
pete = {name: "Pete", age: 30};
mary = {name: "Mary", age: 29};

arr = [john, pete, mary];

function getAverageAge(userArray) {
    return userArray.reduce((sum, user) =>
        sum + user.age, 0) / userArray.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//------------------
users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(usersArray) {
    return usersArray.reduce((usersByIdMap, currentUser) => {
        usersByIdMap[currentUser.id] = currentUser;
        return usersByIdMap;
    }, {})
}

let usersById = groupById(users);
console.log(usersById)
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
