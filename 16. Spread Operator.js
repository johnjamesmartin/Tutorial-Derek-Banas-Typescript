/* Spread operators (...) allows us to separate values in an
   array into attributes in a function: */
function theSum(x, y, z) {
    document.write('Sum: ' + (x + y + z) + '<br/>');
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
/* Bonus exercise: Enumerated types: */
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 2] = "Angry";
})(Emotion || (Emotion = {}));
var myFeeling = Emotion.Happy;
document.write("My emotion for happy: " + myFeeling + "<br/>");
var myFeeling2 = Emotion.Angry;
document.write("My emotion for angry: " + myFeeling2);
