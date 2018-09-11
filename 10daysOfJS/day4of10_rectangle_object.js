/**

THOUGHTS:
This is about getting used to object creation in javaScript. You can do
this by accepting the parametrs in as a function and then instantiate them
as variables to be used later.By doing this you can later access the variables
outisde your function.


PROBLEM URL:
https://www.hackerrank.com/challenges/js10-objects/problem
**/

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.area = a*b;
    this.perimeter = 2*(a+b)
}
