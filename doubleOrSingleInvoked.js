function getTheNumbers(...num) {
  if (num.length === 2) {
    return num[0] + num[1];
  } else if (num.length === 1) {
    return num2 => {
      return num[0] + num2;
    };
  }
}

console.log(getTheNumbers(20)(30));
console.log(getTheNumbers(10, 5));
