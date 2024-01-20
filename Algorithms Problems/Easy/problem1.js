// Problem On LeetCode : 1929. Concatenation of Array


// Solution
// Time complexity : O(n)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = nums;

    for (let i=0; i<nums.length; i++) {
        ans = [...ans, nums[i]]
    }
    return ans;
};


console.log(getConcatenation([1,2,1]))