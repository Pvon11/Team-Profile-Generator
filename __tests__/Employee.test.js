const { Triangle, Square, Circle } = require("./geomotry.js");

describe("Circle", () => {
  it("should return a logo with a circle shape with the set text and color", () => {
    const circle = new Circle();
    circle.setColor("blue");
    circle.setText("123");
    expect(circle.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">123</text></svg>'
    );
  });
});

describe("Triangle", () => {
  it("should return a logo with a triangle shape with the set text and color", () => {
    const triangle = new Triangle();
    triangle.setColor("purple");
    triangle.setText("HIS");
    expect(triangle.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="purple" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">HIS</text></svg>'
    );
  });
});

describe("Square", () => {
  it("should return a logo with a square shape with the set text and color", () => {
    const square = new Square();
    square.setColor("green");
    square.setText("sup");
    expect(square.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" x="90" y="40" fill="green" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">sup</text></svg>'
    );
  });
});
