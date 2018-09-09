/**
THOUGHTS:
In this challenge, I learned about throwing custom errors using the
command throw

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-throw/problem

**/



*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    try{
        if (a<0){
            throw "Negative Error";
        }
        if (a===0){
            throw "Zero Error";
        }
        else{
            return "YES";
        }
       }
    catch(err){
        return err;

    }
}
