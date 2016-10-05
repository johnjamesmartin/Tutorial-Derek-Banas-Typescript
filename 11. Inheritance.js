var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + ' is owned by ' + this.owner + '<br/>');
    };
    /* 'static' method (class method).
       'static' means that only one instance is created and
       shared rather than duplicated each time there's a new object:
    */
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
var spot = new Animal('Spot', 'Doug');
spot.ownerInfo();
spot.weight = 100;
document.write('Spot\'s weight is ' + spot.weight + '<br/>');
document.write('# of animals ' + Animal.howManyAnimals() + '<br/>');
/* Inheritence. See how Dog can inherit from Animal: */
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        _super.call(this, name, owner);
        Dog.numOfAnimals++;
    }
    return Dog;
}(Animal));
var grover = new Dog('Grover', 'Jimmy');
document.write('# of animals ' + Animal.howManyAnimals() + '<br/>');
document.write('Is Dog an Animal?: ' + (grover instanceof Animal) + '<br/>');
document.write('Does grover have a name?: ' + ('name' in grover) + '<br/>');
