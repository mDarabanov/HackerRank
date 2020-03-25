function myFunc() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}

const firstInstance = myFunc();
const secondInstance = myFunc();
console.log('First instance executes:', firstInstance());
console.log('Second instance executes:', secondInstance());
console.log('Second instance executes:', secondInstance());
