// Problem On LeetCode : 1108. Defanging an IP Address


// Solution
// Time complexity : O(n)

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {

    let newAdress = ''

    for (let i=0; i<address.length; i++) {
        if (address[i] != '.') {
            newAdress += address[i]
        }
        else {
            newAdress += '[.]'
        }
    }
    return newAdress
};
