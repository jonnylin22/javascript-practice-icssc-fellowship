/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let candidate = null;
    let count = 0;
    for (const num of numbers) {
        if (count === 0 ) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    count = 0;
    for (const num of numbers) {
        if (num === candidate) {
            count ++;
        }
    }

    if (count > Math.floor(numbers.length / 2)) {
        return candidate;
    }
    return null;
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};