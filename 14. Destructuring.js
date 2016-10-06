var randVals = { x: 1, y: 2, z: 3 };
/* Destructuring is useful because it allows you to do in a single line,
   what would otherwise require multiple lines: */
var x = randVals.x, y = randVals.y, z = randVals.z;
document.write(x + y + z + '<br/>');
/* We can also flip arrays like so: */
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
document.write('Switch: ' + x + y + z + '<br/>');
var _a;
