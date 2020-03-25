let i = 13;
let j = 45;
let k = 6;
let result;
let counter = 0;

for (let x = i; x <= j; x++) {
  result = parseInt(
    x
      .toString()
      .split('')
      .reverse()
      .join('')
  );

  if ((Math.abs(x - result) / k) % 1 === 0) {
    counter++;
  }
}
console.log(counter);

let str = '12345';
let gg = str.split('');
console.log(gg);
