/* We use generic functions when we want to work with multiple
   data types in similar ways: */

function GetType<T>(val: T): string {
    return typeof(val);
}

/* ^ The <T> marker allows us to pass in different data types: */

var aStr = 'A String';
var aNum = 10;

document.write(GetType(aStr) + '<br/>');
document.write(GetType(aNum) + '<br/>');

/* Generic classes: */

class GenericNumber<T> {
    add: (val1: T, val2: T) => T;
}


/* How numbers work with this class ^ */

var aNumber = new GenericNumber<number>();

aNumber.add = function (x, y) {
    return x + y;
}

document.write('5 + 4 = ' + aNumber.add(5, 4) + '</br>');

/* How strings work with this class ^ */

var aStrNum = new GenericNumber<string>();

aStrNum.add = function (x, y) {
    return String(Number(x) + Number(y));
}

document.write('5 + 6 = ' + aStrNum.add('5', '6') + '</br>');