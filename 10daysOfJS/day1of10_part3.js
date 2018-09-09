/**
THOUGHTS:
This challenge was all about understanding the difference between const and
let.

const declares a variable that is fixed and can't be changed. It is immutable
let declares a variable that is mutable.

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-let-and-const/problem

**/



function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine();

    const PI = Math.PI;
    // Print the area of the circle:
    let area= PI*Math.pow(r,2);
    // Print the perimeter of the circle:
    let perimeter = 2*PI*r;

    console.log(area)
    console.log(perimeter)
