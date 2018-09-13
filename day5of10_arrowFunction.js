/**

PROBLEM DESCRIPTION:
This problem was about using the arrow function. Now the arrow function as
I understand it, is just a shorter version of the function syntax.

THOUGHTS:
I didn't really have any special thoughts. Just getting used to the syntax of
arrow function was a bit of the challenge.

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-arrows/problem

**/


/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(s=> s%2==0 ? s*2: s*3 )


    }
