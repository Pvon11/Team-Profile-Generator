const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { Circle, Triangle, Square } = require("./lib/geomotry");
const questions = [
  {
    type: "input",
    message: "Enter up to 3 characters for your Logo",
    name: "characters",
    validate: (input) => {
      if (input.length > 3) {
        console.log("Your logo cannot contain more than 3 characters");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    message: "Choose a shape from the list given",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message: "Enter a color keyword or a hexadecimal number",
    name: "color",
  },
];

function init() {
  inquirer.prompt(questions).then((response) => {
    console.log("then");
    console.log("response= ", response);
    generateSVG(response.characters, response.shape, response.color);
  });
}

function generateSVG(characters, shape, color) {
  console.log(characters, shape, color);
  let code = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  let newShape;
  switch (shape) {
    case "Triangle":
      newShape = new Triangle();
      newShape.setColor(color);
      code += newShape.render();
      break;
    case "Circle":
      newShape = new Circle();
      newShape.setColor(color);
      code += newShape.render();
      break;
    default:
      newShape = new Square();
      newShape.setColor(color);
      code += newShape.render();
      break;
  }

  code += `${characters}</text>
  
  </svg>`;
  fs.writeFileSync(path.join(__dirname, "..", "dist", "logo.svg"), code);
  console.log("Wrote to file");
}

init();
