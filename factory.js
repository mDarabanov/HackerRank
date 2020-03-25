function dist(distance) {
  return speed => {
    return distance / speed;
  };
}

const sofPld = dist(120);
console.log(sofPld(100));
