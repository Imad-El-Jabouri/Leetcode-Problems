// Problem On LeetCode : 1512. Number of Good Pairs


// Solution
// Time complexity : O(n^2)

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {

    let pairs = 0;

    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] == nums[j]) {
                pairs++
            }
        }
    }
    return pairs;
};