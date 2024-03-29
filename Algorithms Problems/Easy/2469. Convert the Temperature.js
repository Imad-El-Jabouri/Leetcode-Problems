// Problem On LeetCode : 2469. Convert the Temperature


// Solution
// Time complexity : O(1)

/**
 * @param {number} celsius
 * @return {number[]}
 */

var convertTemperature = function(celsius) {
    return [celsius + 273.15, (celsius * 1.80) + 32.00]
};