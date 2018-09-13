/**

PROBLEM DESCRIPTION:
This problem involved getting any valid date in mm/dd/yyyy format and
returning what day was on that date.

THOUGHTS:
This was a fun challenge. First off, you get the date of the date string by
using a method called Date and passing in your dateString.
Then your call getDay on that date and it will give you a value which you then
use as an index for your days in the array below:
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-date/problem


**/

function getDayName(dateString) {
    let dayName;
    // Write your code here
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString)
    dayName = days[d.getDay()]
    return dayName;
}
