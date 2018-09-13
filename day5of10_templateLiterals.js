/**

PROBLEM:
Use strings literals to parse through an argument and
print the sorted array with the sides of a polygon.

THOUGHTS:
The description for this problem is one of the most complicated pieces of
jargon on Hacker rank and I don't know why they let it be put up. 

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-template-literals/problem



*//


/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let [a,p] = expressions;
    let s1 = (p + Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4;
    let s2 = (p - Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4;
    return [s1,s2].sort();

}
