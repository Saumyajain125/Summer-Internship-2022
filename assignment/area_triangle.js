// Length of side: 3 of a triangle
const a = 10;
const b = 20;
const c = 20;

const semiPerimeter = (a + b + c) / 2;

const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));

area? console.log(area) : console.log("Not a triangle");