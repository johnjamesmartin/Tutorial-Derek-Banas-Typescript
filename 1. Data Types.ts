/* In TS, variables can be defined with strict, static typing: */

var myName: string = 'Bart Simpson';
var myAge: number = 10;
var canVote: boolean = false;

/* It can also infer types (duck-typing) and offer dynamic typing
   when the type is set to 'any': */

var anything: any = 'dog';

anything = 2;