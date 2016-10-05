/* Arrays can be set to a certain data type.
   In this case only strings can be stored or pushed: */
var employees = ['Bob', 'Sally', 'Sam'];
document.write(employees.toString() + '<br/>');
var superheroes = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
document.write(superheroes[0].realName + ' is ' + superheroes[0].superName);
