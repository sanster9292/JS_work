/**
THOUGHTS:

given an array such as the one below where the first line represents
n number of lines to follow.
5
1 1
2 3
3 3
3 4
4 5
You must return the times where o.x===o.y.

This is a simple counter problem.

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-count-objects/problems


**/



/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    var count = 0;
    for(let i=0; i<objects.length; i++){

        if(objects[i].x===objects[i].y){
            count++;
        }

    }
    return count
}
