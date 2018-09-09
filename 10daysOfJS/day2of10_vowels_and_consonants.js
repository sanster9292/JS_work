/**
THOUGHTS:
This exercise was about finding if a string contains vowels and print them
in the order they appear in a string.

Then you had to print the consonants(non-vowels) in the string in the order
they appear in.

PROBLEM URL:
https://www.hackerrank.com/challenges/js10-loops/problem
**/

function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];

    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])){
            console.log(s[i]);
                        }
    }

    for (var i= 0; i<s.length; i++){
        if (!vowels.includes(s[i])) {
            console.log(s[i]);
        }

    }

}
