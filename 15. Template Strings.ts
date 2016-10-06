/* Template strings are useful in that we can write
   strings over multiple lines and use interpolation
   to save use writing '+' between substrings: */

var multStr = `I go
on for many
lines<br/>`;

document.write(multStr);

document.write(`<b>${multStr}</b>`);