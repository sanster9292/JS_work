/**
THOUGHTS:
In this problem, the main thing I learned was the use of super. It is used
to reference the methods of a parent class that you are referencing from.

PROBLEM DESCRIPTION:
In this problem I had to create a class Rectangle and then create a  child
class called Square which used the traits established in Rectangle.

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-inheritance/problem
**/


/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */Rectangle.prototype.area = function() {
     return(this.w*this.h);
 }

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s){
        super(s,s)
    }
}
