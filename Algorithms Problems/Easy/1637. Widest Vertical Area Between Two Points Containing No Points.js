// Problem On LeetCode : 1637. Widest Vertical Area Between Two Points Containing No Points



// Solution
// Time complexity : O(n^2)


/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {

    let Array_Of_X_Axis = []

    //add each Xi to -> Array_Of_X_Axis
    for (let lines=0; lines<points.length; lines++) {
        Array_Of_X_Axis.push(points[lines][0])
    }

    //sort Array_Of_X_Axis descending

                // for (let i=0; i<Array_Of_X_Axis.length; i++) {
                //     for (let ii=Array_Of_X_Axis.length-1; ii>=i; ii--) {
                //         let x;

                //             if (Array_Of_X_Axis[ii] > Array_Of_X_Axis[i]) {
                //                 x = Array_Of_X_Axis[i]
                //                 Array_Of_X_Axis[i] = Array_Of_X_Axis[ii]
                //                 Array_Of_X_Axis[ii] = x
                //             }
                //     }
                // }

    Array_Of_X_Axis.sort((a, b) => b-a)
    
    
    //add each Xi to -> Array_Of_X_Axis
    let findMax = []
    for (let i=0; i<Array_Of_X_Axis.length; i++) {
        if (i+1 < Array_Of_X_Axis.length) {
            let difference_between_two_x = Array_Of_X_Axis[i] - Array_Of_X_Axis[i+1]
            findMax.push(difference_between_two_x)
        }
    }
    

    return Math.max(...findMax)
};


console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]))