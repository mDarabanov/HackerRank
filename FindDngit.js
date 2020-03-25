let n = 1012;
let splitN = n
  .toString()
  .split('')
  .map(Number);
console.log(splitN);
let counter = 0;

for (let i = 0; i < splitN.length; i++) {
  if (n % splitN[i] === 0) {
    counter++;
  }
}

console.log(counter);
