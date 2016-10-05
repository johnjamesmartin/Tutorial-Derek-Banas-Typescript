/* 'for in' prints out indexes: */

var randArray = [5, 6, 7, 8];

for (var val in randArray) {
    document.write(val + '<br/>');
}

/* Convert elements in array to strings: */

var strArray = randArray.map(String);

/* 'for of' print out elements */

for (var val of strArray) {
    document.write(val + '<br/>');
}