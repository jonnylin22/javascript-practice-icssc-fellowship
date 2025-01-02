/**
 * Problem 8: Avg with Reducing 
 * 
 * Given a list of numbers, return the average of the list.
 * Use the .reduce function.
 * 
 * @example [1, 2, 3] -> 2
*/
function problem(numbers) {
    const sum = numbers.reduce(function(result, item) {
        return result + item;
    }, 0)
    let avg = sum / numbers.length;
    return avg;
}

const tests = [
    [[1, 2, 3], 2],
    [[2, 31, 4, 5, 2, 67], 18.5],
]

module.exports = {problem, tests};