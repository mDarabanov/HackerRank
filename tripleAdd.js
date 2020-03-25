function tripleAdd(a) {
  return b => {
    return c => {
      console.log(a + b + c);
    };
  };
}

tripleAdd(1)(2)(3);
