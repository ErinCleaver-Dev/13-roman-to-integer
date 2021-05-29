/**
 * @param {string} s
 * @return {number}
 */


/*
Problem is to find roman numerals and change them to a Interger
The remote numerls are 

I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Limitations:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//regex for checking for characters
//check if empty string
// for loop for string
// switch or if stement;
// if next value is greater then lenght will not check if V, L, C, D, M
// if statements for checking format.
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
// if stement to make sure the value is between 1 and 3999
*/

// source:  https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    let value = 0;
    let re = RegExp ('/[IVXLCDM]*/')

    if( 1 >= s.length || s.length <= 15) {
        if(re) {
            
        } else {
            console.log("Please enter a value that contain I, V, X, L, C, D, or M")
        }


    }


    return value;
};

console.log(`The input is III and the output should be 3 for the roman to int function: ${romanToInt("III")}`)

console.log(`The input is IV and the output should be 4 for the roman to int function: ${romanToInt("TX")}`)

console.log(`The input is IX and the output should be 9 for the roman to int function: ${romanToInt("IX")}`)

console.log(`The input is MCMXCIV and the output should be 1994 for the roman to int function: ${romanToInt("MCMXCIV")}`)
