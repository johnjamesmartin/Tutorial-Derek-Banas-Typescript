/* We can set attribute types as well as return types in TS: */

var getSum = function(num1: number, num2: number): number {
    return num1 + num2;
}

var theSum1: number = getSum(5, 2);

// document.write('5 + 2 = ' + theSum1 + '<br/>');


/* We can also set default values of attributes with '='
   as well as option attributes with '?'.
*/

var getDiff = function (num1: number, num2 = 2, num3?: number): number {
    if (typeof num3 !== undefined) { 
        return num1 - num2 - num3;
    } else {
        return num1 - num2;
    }
}

// document.write('5 - 2 = ' + getDiff(5) + '<br/>');
// document.write('5 - 2 - 3 = ' + getDiff(5, 2, 3) + '<br/>');


/* Rest parameter allows us to quickly accept multiple 
   arguments in your function and get them as an array: */

var sumAll = function(...nums: number[]): void {
    var sum = nums.reduce((a, b) => a + b, 0);
    document.write('Sum: ' + sum + '<br/>');
}

sumAll(1, 2, 3, 4, 5);

/* Fat arrow function is available in TypeScript (as with ES6 native JS): */

var addOne = (x) => x + 1;

document.write('1 + 1 = ' + addOne(1) + '<br/>');