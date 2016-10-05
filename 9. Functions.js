/* We can set attribute types as well as return types in TS: */
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
// document.write('5 + 2 = ' + theSum1 + '<br/>');
/* We can also set default values of attributes with '='
   as well as option attributes with '?'.
*/
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== undefined) {
        return num1 - num2 - num3;
    }
    else {
        return num1 - num2;
    }
};
// document.write('5 - 2 = ' + getDiff(5) + '<br/>');
// document.write('5 - 2 - 3 = ' + getDiff(5, 2, 3) + '<br/>');
/* Rest parameter allows us to quickly accept multiple
   arguments in your function and get them as an array: */
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i - 0] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write('Sum: ' + sum + '<br/>');
};
sumAll(1, 2, 3, 4, 5);
/* Fat arrow function is available in TypeScript (as with ES6 native JS): */
var addOne = function (x) { return x + 1; };
document.write('1 + 1 = ' + addOne(1) + '<br/>');
