/**

THOUGHTS:
This is a simple implementation of class in javaScript. We had to create a
class called polygon which takes an array of sides. You then return the perimeter
of the polygon which is essentially just the sum of all those sides.

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-class/problem

**/


/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(sides){
        this.sides = sides;
    }
        perimeter() {
            var sum = 0;
            for (let i = 0; i<this.sides.length; i++){
                sum = sum+ this.sides[i];

            }
            return sum;
        }

    }
