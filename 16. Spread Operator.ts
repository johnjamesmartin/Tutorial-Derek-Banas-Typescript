/* Spread operators (...) allows us to separate values in an 
   array into attributes in a function: */

function theSum(x, y, z): void {
    document.write('Sum: ' + (x + y + z) + '<br/>');
}

var args = [4, 5, 6];

theSum(...args);


/* Bonus exercise: Enumerated types: */

enum Emotion {
    Happy = 1,
    Sad,
    Angry = 2
}

var myFeeling = Emotion.Happy;
document.write(`My emotion for happy: ${myFeeling}<br/>`);

var myFeeling2 = Emotion.Angry;
document.write(`My emotion for angry: ${myFeeling2}`);