/* Different operands in TypeScript (same as JS): */

document.write('5 + 4 = ' + (5 + 4) + '<br/>');
document.write('5 - 4 = ' + (5 - 4) + '<br/>');
document.write('5 * 4 = ' + (5 * 4) + '<br/>');
document.write('5 / 4 = ' + (5 / 4) + '<br/>');
document.write('5 % 4 = ' + (5 % 4) + '<br/>');

document.write('5 + String 2 = ' + (5 + '2') + '<br/>');


/* There are different ways to increment and decrement.
   Having ++ or -- after the variable means the current
   value will print out and AFTER it has printed, the
   increment or decrement will complete: */

var randNum: number = 1;

document.write('randNum++ = ' + randNum++ + '<br/>');
document.write('++randNum = ' + ++randNum + '<br/>');
document.write('randNum-- = ' + randNum-- + '<br/>');
document.write('--randNum = ' + --randNum + '<br/>');