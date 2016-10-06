interface Vehicle {
    drive(): any;
}

class Car implements Vehicle {
    constructor(private wheels: number) {

    }
    drive(): void {
        document.write('The car drives with ' + this.wheels + ' wheels<br/>')
    }
}

class Bicycle implements Vehicle {
    constructor(private wheels: number) {

    }
    drive(): void {
        document.write('The bicycle drives with ' + this.wheels + ' wheels<br/>')
    }
}

var car = new Car(4);
var bike = new Bicycle(2);

car.drive();
bike.drive();