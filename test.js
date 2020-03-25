function num(a) {
  return b => {
    return c => {
      return a + b + c;
    };
  };
}

console.log(num(1)(2)(3));

const ll = (function() {
  console.log('Immediately invoked function expression!!');
})();
