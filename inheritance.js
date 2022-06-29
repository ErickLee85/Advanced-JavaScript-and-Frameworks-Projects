class Shape {
    constructor(Color) {
        this.Color = Color;
    }
    static getArea() {
       console.log("Gets the area of an object.")
    }
}

class Rectangle extends Shape {
    constructor(Color, Height, Width){
        super(Color);
        this.Height = Height;
        this.Width = Width;     
    }
     getArea() {
        console.log(`The area of a rectangle with a Height of ${this.Height} and a width of ${this.Width} is ${this.Height * this.Width}.`);
    }

}

class Triangle extends Shape {
    constructor(Color,Base, Height){
        super(Color);
        this.Base = Base;
        this.Height = Height;
    }
    getArea() {
        console.log(`The area of a triangle with a Base of ${this.Base} and a Height of ${this.Height} is ${this.Base * this.Height}.`)
    }

}

class Circle extends Shape {
    constructor(Color,Radius){
        super(Color);
        this.Radius = Radius
    }
    getArea () {
        console.log(`The area of a circle with a radius of ${this.Radius} is: ${this.Radius**2 * Math.PI}.`);       
    }
}

Circle.getArea();

var myRectangle = new Rectangle("Blue", 5, 10);
myRectangle.getArea();

var myTriangle = new Triangle("Yellow", 15, 20);
myTriangle.getArea();

var myCirlce = new Circle("red", 10);
myCirlce.getArea();


