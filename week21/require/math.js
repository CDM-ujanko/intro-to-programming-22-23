function addTwo(a, b) {
  return a + b;
}

function square(a) {
  return a * a;
}

// module.exports = addTwo;

module.exports = {
  addTwo: addTwo,
  square: square
}
