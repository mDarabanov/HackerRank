function kaprekarNumber(p, q) {
  let result;
  let convert = [];
  let mappingToNumber = 0;
  for (let i = p; i <= q; i++) {
    mappingToNumber = 0;
    result = i * i;
    if (result > 9) {
      convert = result.toString().split('');
      convert.forEach(element => {
        mappingToNumber += parseInt(element);
      });
    }
    if (mappingToNumber == i) {
      console.log(i);
    }
  }
}
kaprekarNumber(9, 100);
