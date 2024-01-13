// Problem On LeetCode : 2769. Find the Maximum Achievable Number


// Solution

/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {

    let x = num + (2 * t);

    if (x - t == num + t) {
        return x
    }
};