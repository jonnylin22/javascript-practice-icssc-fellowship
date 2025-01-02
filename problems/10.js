/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    const arr = str.split("");
    let firsthalf = [];
    let secondhalf = [];
    for (let i = 0 ; i < str.length   ; i ++) {
        if (i < Math.floor(str.length / 2)  ) {
            firsthalf[i] = arr[i];
        } else {
            secondhalf[i] = arr[i];
        }
    }

    let first = firsthalf.join('').toUpperCase();
    let second = secondhalf.join('').toLowerCase();
    return `${first}${second}`;
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};