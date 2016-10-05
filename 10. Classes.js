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
