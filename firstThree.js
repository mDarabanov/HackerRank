input = ['Chocolate', '3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let charters = gets();
console.log(charters);
let boys = gets()
  .split(',')
  .map(Number);
let firstThree = '';

if (charters.length <= 3) {
  print(charters.toLocaleLowerCase().repeat(boys));
} else if (charters.length > 3) {
  firstThree = charters.toLocaleLowerCase().substring(0, 3);
  print(firstThree.repeat(boys));
}
