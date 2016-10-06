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