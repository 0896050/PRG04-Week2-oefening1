"use strict";

class Car 
{
    constructor(speed, color)
    {
        console.log("We created a car!");
        this.speed = this.drive();
        this.color = this.colors();
        console.log('I am driving at speed ', this.speed);
        console.log('The car color = ', this.color);
    
    }

    drive()
    {
        var x = Math.floor(Math.random() * 4);
        console.log('het nummer is ', x);

        let speed = [10, 20, 30, 40];
        return speed[x];
    }

    colors()
    {
        var y = Math.floor(Math.random() * 4);
        console.log('het nummer is ', y);
        
        let color = ["red", "green", "yellow", "blue"];
        return color[y];
    }

    stop()
    {
        speed = 0;
        console.log('The car is stopped');
        return speed;
    }

}

let cars = [];
for (let i = 0; i < 20; i++)
{
    let c = new Car();
    cars.push(c);
}
