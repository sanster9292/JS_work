/**
THOUGHTS:
In this challenge, you have to return the second largest number in an
array of numbers

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-arrays/problem

**/

function getSecondLargest(nums) {
    // Complete the function

    const newArray = Array.from(new Set(nums));
    const sortNums = newArray.sort(function(a,b){return b-a});
    const secondLargest = sortNums[1];
    return secondLargest;

}
