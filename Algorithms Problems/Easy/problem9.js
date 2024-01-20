// Problem On LeetCode : 1470. Shuffle the Array


// Solutions
// Time complexity : O(n)



/*
    SOLUTION 1
 */
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

    let Arr1 = []
    
    for (let i=0; i<n; i++) {
        Arr1.push(nums[i])
        Arr1.push(nums[n+i])
    }

    return Arr1
};




/*
    SOLUTION 2
 */
var shuffle = function(nums, n) {

    let Arr1 = []
    
    for (let i=0; i<n; i++) {
        Arr1 = [...Arr1, nums[i], nums[n+i]]
    }

    return Arr1
};