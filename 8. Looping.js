/* 'for in' prints out indexes: */
var randArray = [5, 6, 7, 8];
for (var val in randArray) {
    document.write(val + '<br/>');
}
/* Convert elements in array to strings: */
var strArray = randArray.map(String);
/* 'for of' print out elements */
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + '<br/>');
}
