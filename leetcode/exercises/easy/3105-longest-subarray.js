/* 
    You are given an array of integers nums. Return the length of the longest subarray of nums which is either strictly increasing or strictly decreasing.
 */

const nums = [3, 2, 1];


function longestMonotonicSubarray(array) {
    let increasingLength = 1;
    let decreasingLength = 1;
    let longestLength = 1;
    
    for (let i = 1; i < array.length; i++) {

        if(array[i-1] < array[i]) {
            increasingLength += 1;
            if (increasingLength > longestLength){
                longestLength = increasingLength
            } 
        } else {
                increasingLength = 1
            };
    } 
    
    for (let i = 1; i < array.length; i++) {

        if(array[i-1] > array[i]) {
            decreasingLength += 1
            if (decreasingLength > longestLength) {
                longestLength = decreasingLength;
            };
        } else {
            decreasingLength = 1;
        }
    }


    console.log("LONGEST LENGTH:");
        console.log(longestLength);
}
longestMonotonicSubarray(nums);
