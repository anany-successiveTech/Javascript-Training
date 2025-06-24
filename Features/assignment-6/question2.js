// 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape
// class and implement the getArea() method for their respective shapes.

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

class Rectangle extends Shape {
  getArea() {
    return this.height * this.width;
  }
};

class Triangle extends Shape {
  getArea() {
    return 0.5 * this.height * this.width;
  }
};

const rectangle = new Rectangle(4, 5);
const triangle = new Triangle(2, 2);

const rectangleArea = rectangle.getArea(rectangle);
const triangleArea = triangle.getArea(triangle);

console.log(`The area of rectangle is : ${rectangleArea}`);
console.log(`THe area of triangle is: ${triangleArea}`);
