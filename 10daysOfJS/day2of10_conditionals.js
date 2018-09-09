/**
THOUGHTS:
This challenge was to see if the first letter in a string 's' matches any
of the cases shown in the code below. If so it would return the
coresponding letter

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-switch/problem


**/



function getLetter(s) {
    let letter;
    // Write your code here

    switch(true){
        case 'aeiou'.includes(s[0]):
                letter = 'A';
                break
        case 'bcdfg'.includes(s[0]):
                letter ='B';
                break
        case 'hjklm'.includes(s[0]):
                letter = 'C';
                break
        case 'npqrstvwxyz'.includes(s[0]):
                letter = 'D';
                break
    }

    return letter
