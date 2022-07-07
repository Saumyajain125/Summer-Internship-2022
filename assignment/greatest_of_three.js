const a = 10;
const b = 20;
const c = 30;
const greater = (u,v) => u > v ? u : v;
console.log(greater(greater(a,b),c));