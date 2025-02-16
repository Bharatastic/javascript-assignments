function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfArray([1, 13, 22, 123, 49]));
console.log(sumOfArray([1, 22, 333, 4444, 55555]));
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumOfArray([3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]));
console.log(sumOfArray([9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]));
