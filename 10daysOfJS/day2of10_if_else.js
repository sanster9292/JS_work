/**

THOUGHTS:
This challenge was about calculating the grade of a given score. I implemented
the following code

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-if-else/problem


**/




function getGrade(score) {
    return 'FFEDCBA'[Math.ceil(score/5.0)];
}
