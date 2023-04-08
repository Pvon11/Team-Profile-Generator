class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  setText(str) {
    this.text = str;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">${this.text}</text></svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">${this.text}</text></svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" x="90" y="40" fill="${this.color}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">${this.text}</text></svg>`;
  }
}

module.exports = { Triangle, Square, Circle };
