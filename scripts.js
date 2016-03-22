/// <reference path="typings/browser.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        var damage = 1;
    }
    Vehicle.prototype.move = function () {
        var classname = this.div.className;
        console.log(classname);
        if (classname === 'car') {
            $(this.div).animate({ 'left': '1400px' }, 10000).animate({ 'left': '-60px' }, 10000);
            console.log('a car is driving');
            return;
        }
        ;
        if (classname === 'copcar') {
            $(this.div).animate({ 'top': '900px' }, 10000).animate({ 'top': '-60px' }, 10000);
            console.log('a copcar is driving');
            return;
        }
        ;
        if (classname === 'motorcycle') {
            $(this.div).animate({ 'left': '1250px', 'top': '500px' }, 5000).animate({ 'left': '-60px', 'top': '-60px' }, 5000);
            console.log('a motorocycle is driving');
            return;
        }
        ;
        if (classname === 'tank') {
            $(this.div).animate({ 'left': '1350px' }, 20000).animate({ 'left': '-90px' }, 20000);
            console.log('a tank is driving');
            return;
        }
        ;
    };
    Vehicle.prototype.damage = function () {
        this.health = (this.health) - 1;
        var classname = this.div.className;
        console.log('This ' + classname + ' has ' + this.health + ' health remaining');
        if (this.health === 0) {
            this.remove();
        }
    };
    ;
    Vehicle.prototype.remove = function () {
        this.div.remove();
    };
    ;
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = this;
        _super.call(this);
        this.health = 2;
        this.div.className = 'car';
        $(this.div).css({
            left: Math.floor(Math.random() - 50),
            top: Math.floor(Math.random() * 750)
        });
        this.div.addEventListener('click', function (e) {
            _this.damage();
        });
    }
    return Car;
}(Vehicle));
var CopCar = (function (_super) {
    __extends(CopCar, _super);
    function CopCar() {
        var _this = this;
        _super.call(this);
        this.health = 3;
        this.div.className = 'copcar';
        $(this.div).css({
            left: Math.floor(Math.random() * 1000),
            top: Math.floor(Math.random() - 60)
        });
        this.div.addEventListener('click', function (e) {
            _this.damage();
        });
    }
    return CopCar;
}(Car));
var Motorcycle = (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        var _this = this;
        _super.call(this);
        this.health = 1;
        this.div.className = 'motorcycle';
        console.log('This motorcycles health is ' + this.health);
        $(this.div).css({
            left: Math.floor(Math.random() - 80),
            top: Math.floor(Math.random() * 700)
        });
        this.div.addEventListener('click', function (e) {
            _this.damage();
        });
    }
    return Motorcycle;
}(Vehicle));
var Tank = (function (_super) {
    __extends(Tank, _super);
    function Tank() {
        var _this = this;
        _super.call(this);
        this.health = 10;
        this.div.className = 'tank';
        console.log('This tanks health is ' + this.health);
        $(this.div).css({
            left: Math.floor(Math.random() - 80),
            top: Math.floor(Math.random() * 700)
        });
        this.div.addEventListener('click', function (e) {
            _this.damage();
        });
    }
    return Tank;
}(Vehicle));
function spawnCar() {
    var car = new Car();
    car.move();
    setInterval(function () {
        car.move();
    }, 20000);
}
function spawnCopCar() {
    var copcar = new CopCar();
    copcar.move();
    setInterval(function () {
        copcar.move();
    }, 20000);
}
function spawnMotorcycle() {
    var motorcycle = new Motorcycle();
    motorcycle.move();
    setInterval(function () {
        motorcycle.move();
    }, 10000);
}
function spawnTank() {
    var tank = new Tank();
    tank.move();
    setInterval(function () {
        tank.move();
    }, 20000);
}
