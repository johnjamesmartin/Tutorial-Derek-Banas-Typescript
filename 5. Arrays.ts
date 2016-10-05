/* Arrays can be set to a certain data type.
   In this case only strings can be stored or pushed: */

var employees: string[] = ['Bob', 'Sally', 'Sam'];

document.write(employees.toString() + '<br/>');

/* Using an interface, we can create a custom data type for an array: */

interface SuperHero {
    realName: String;
    superName: String;
}

var superheroes: SuperHero[] = [];

superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});

document.write(superheroes[0].realName + ' is ' + superheroes[0].superName);