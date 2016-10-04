/* In TS, variables can be defined with strict, static typing: */

var myName: string = 'Bart Simpson';
var myAge: number = 10;
var canVote: boolean = false;

/* It can also infer types (duck-typing) and offer dynamic typing
   when the type is set to 'any': */

var anything: any = 'dog';

anything = 2;

/* We access the DOM as we would with normal JavaScript: */

document.getElementById('tsStuff').innerHTML = 'My name is ' + myName;

/* We can use the native JavaScript method "typeof" to
   determine the type of our variables:  */

document.write('myName is a ' + typeof(myName) + '<br/>');
document.write('myAge is a ' + typeof(myAge) + '<br/>');
document.write('canVote is a ' + typeof(canVote) + '<br/>');
document.write('anything is a ' + typeof(anything) + '<br/>');