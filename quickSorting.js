function quickSort(arr) {
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  let equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (pivot === arr[i]) {
      equal.push(arr[i]);
    } else if (pivot > arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  let result = leftArr.concat(equal, rightArr);

  return result;
}
