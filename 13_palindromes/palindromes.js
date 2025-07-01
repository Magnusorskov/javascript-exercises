const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const wordWithoutSpaces = word.toLowerCase()
        .split("")
        .filter((character) =>
            alphanumerical.includes(character))
        .join("");

    let leftIndex = 0;
    let rightIndex = wordWithoutSpaces.length - 1;
    let isPalindrome = true;
    while (leftIndex < rightIndex && isPalindrome) {
        if (wordWithoutSpaces.charAt(leftIndex) !== wordWithoutSpaces.charAt(rightIndex)) {
            isPalindrome = false;
        } else {
            leftIndex++;
            rightIndex--;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
