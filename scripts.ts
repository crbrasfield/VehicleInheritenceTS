/// <reference path="typings/browser.d.ts" />

class Vehicle {
    health: number;
    div: HTMLDivElement;
    constructor() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        var damage = 1;
    }


    move() {
        let classname = this.div.className
        console.log(classname)

        if (classname === 'car') {
            $(this.div).animate({ 'left': '1400px' }, 10000).animate({ 'left': '-60px' }, 10000);
            console.log('a car is driving');
            return;
        };
        if (classname === 'copcar') {
            $(this.div).animate({ 'top': '900px' }, 10000).animate({ 'top': '-60px' }, 10000);
            console.log('a copcar is driving');
            return;
        };
        if (classname === 'motorcycle') {
            $(this.div).animate({ 'left': '1250px', 'top': '500px' }, 5000).animate({ 'left': '-60px', 'top': '-60px' }, 5000);
            console.log('a motorocycle is driving');
            return;
        };
        if (classname === 'tank') {
            $(this.div).animate({ 'left': '1350px' }, 20000).animate({ 'left': '-90px' }, 20000);
            console.log('a tank is driving');
            return;
        };
    }


    damage() {
        this.health = (this.health) - 1;
        let classname = this.div.className;
        console.log('This ' + classname + ' has ' + this.health + ' health remaining');
        if (this.health === 0) {
            this.remove();
        }
    };

    remove() {
        this.div.remove();
    };

}

class Car extends Vehicle {
    health = 2;
    constructor() {
        super();
        this.div.className = 'car';

        $(this.div).css({
            left: Math.floor(Math.random() - 50),
            top: Math.floor(Math.random() * 750)
        });
        this.div.addEventListener('click', (e) => {
            this.damage();
        });
    }
}

class CopCar extends Car {
    health = 3;
    constructor() {
        super();
        this.div.className = 'copcar';

        $(this.div).css({
            left: Math.floor(Math.random() * 1000),
            top: Math.floor(Math.random() - 60),
        });
        this.div.addEventListener('click', (e) => {
            this.damage();
        });
    }
}

class Motorcycle extends Vehicle {
    health = 1;
    constructor() {
        super();
        this.div.className = 'motorcycle';
        console.log('This motorcycles health is ' + this.health);

        $(this.div).css({
            left: Math.floor(Math.random() - 80),
            top: Math.floor(Math.random() * 700)
        });
        this.div.addEventListener('click', (e) => {
            this.damage();
        });

    }
}

class Tank extends Vehicle {
    health = 10;
    constructor() {
        super();
        this.div.className = 'tank';
        console.log('This tanks health is ' + this.health);

        $(this.div).css({
            left: Math.floor(Math.random() - 80),
            top: Math.floor(Math.random() * 700)
        });
        this.div.addEventListener('click', (e) => {
            this.damage();
        });
    }
}

function spawnCar () {
    var car  = new Car();
    car.move();
    setInterval(function() {
       car.move(); 
    }, 20000);
}

function spawnCopCar () {
    var copcar = new CopCar();
    copcar.move();
     setInterval(function() {
       copcar.move(); 
    }, 20000);
}

function spawnMotorcycle () {
    var motorcycle = new Motorcycle();
    motorcycle.move();
     setInterval(function() {
       motorcycle.move(); 
    }, 10000);
}

function spawnTank () {
    var tank = new Tank();
    tank.move();
     setInterval(function() {
       tank.move(); 
    }, 20000);
}

