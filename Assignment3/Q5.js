function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(reverseArray([1, 13, 22, 123, 49]));
console.log(reverseArray([1, 22, 333, 4444, 55555]));
