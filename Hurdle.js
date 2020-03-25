let hurdles = [1, 6, 3, 5, 2];

let danMaximum = 4;

let maxNum = 0;

for (let i = 0; i < hurdles.length; i++) {
  if (hurdles[i] > maxNum) {
    maxNum = hurdles[i];
  }
}

console.log(maxNum > danMaximum ? maxNum - danMaximum : 0);
