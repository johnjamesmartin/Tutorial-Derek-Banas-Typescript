class Animal {
    public favFood: string;
    
    static numOfAnimals: number = 0;
    
    constructor(private name: string, private owner: string) {
        Animal.numOfAnimals++;
    }

    ownerInfo() {
        document.write(this.name + ' is owned by ' + this.owner + '<br/>');
    }

    /* 'static' method (class method). 
       'static' means that only one instance is created and 
       shared rather than duplicated each time there's a new object:
    */
    
    static howManyAnimals(): number {
        return Animal.numOfAnimals;
    }

    /* Getters and setters for private property of '_weight': */

    private _weight: number;

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }
}

var spot = new Animal('Spot', 'Doug');
spot.ownerInfo();
spot.weight = 100;

document.write('Spot\'s weight is ' + spot.weight + '<br/>');
document.write('# of animals ' + Animal.howManyAnimals() + '<br/>');
