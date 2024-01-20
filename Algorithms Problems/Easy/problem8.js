// Problem On LeetCode : 771. Jewels and Stones


// Solution
// Time complexity : O(n^2)


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {

    let found = 0;

    for (let i=0; i<jewels.length; i++) {
        for (let j=0; j<stones.length; j++) {
            if (jewels[i] === stones[j]) {
                found++
            }
        }
    }

    return found
};


console.log(numJewelsInStones("aA", "aAAbbbb"))

