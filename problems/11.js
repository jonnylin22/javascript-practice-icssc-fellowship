/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    const arr = str.split('').reverse();
    let reversed = arr.map(item => item.replace(/\s+/g, ""));
    reversed = reversed.join('').toLowerCase(); 
    let nospaces = str.replace(/\s+/g, "").toLowerCase();
    let bool = false;
    if (nospaces == reversed) {
        bool = true;
    }  
    return bool;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};