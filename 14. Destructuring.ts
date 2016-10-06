var randVals = { x: 1, y: 2, z: 3 };

/* Destructuring is useful because it allows you to do in a single line, 
   what would otherwise require multiple lines: */

var {x, y, z} = randVals;

document.write(x + y + z + '<br/>');

/* We can also flip arrays like so: */

[x, y, z] = [z, y, x];

document.write('Switch: ' + x + y + z + '<br/>');