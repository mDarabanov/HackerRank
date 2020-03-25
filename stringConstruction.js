let str = 'sbcd';
let str1 = 'sbsb';

// let s = str.substr(0, 2);
// console.log(s);
function stringConstruct(s) {
  let p = '';
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (p.includes(s.charAt(i))) {
      // console.log(counter);
      continue;
    } else {
      p += s.substr(i, 1);
      counter++;
    }
  }
 return counter;
}

stringConstruct(str1);
