/**

THOUGHTS:
This is the classic factorial implementation of factorial, but this time in
javascript.

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-function/problem

**/

/*
 * Create the function factorial here
 */function factorial(n){
     if (n===0){
         return 1;
     }
    else
        return (n*factorial(n-1));

 }
