/* Interfaces allow for complex data types: */

interface SuperHero {
    realName: String;
    superName: String;
}

/* Here, SuperHero is a complex (custom) data type: */

var superman: SuperHero = {
    realName: 'Clark Kent',
    superName: 'Superman'
}

document.write(superman.realName + ' is ' + superman.superName);