const globalVar = 'global';

function outer(par1) {
  const outerScope = 'outer scope';

  function inner(par2) {
    const InnerScope = 'inner scope';

    console.log('globalVar: ' + globalVar);
    console.log('outerVar: ' + outerScope);
    console.log('innerVar: ' + InnerScope);
    console.log(par1);
    console.log(par2);
  }
  inner('outerParameter');
}
outer('outerParameter');
