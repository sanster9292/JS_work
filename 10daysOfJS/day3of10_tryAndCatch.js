
/**
THOUGHTS:
Given a string of letters/words, split it, reverse it and then join it.
If any error is thrown, return the error message.

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

**/


/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
   try{
       var myString = s.split("").reverse().join("");
       console.log(myString);
          }
    catch(e){
        console.log(e.message);
        console.log(s);
    }
}
