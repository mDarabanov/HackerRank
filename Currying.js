function multiply(a) {
  return b => {
    return c => {
      return a * b * c;
    };
  };
}

console.log(multiply(4)(5)(5));
// function getTotal(a, b) {
//   return a + b;
// }

// console.log(getTotal(10, 20));

// function total(a) {
//   return b => {
//     return a + b;
//   };
// }

// console.log(total(10)(10));
