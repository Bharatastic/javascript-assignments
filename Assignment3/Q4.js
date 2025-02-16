function sumOfTwoArray(arr1, arr2) {
  let sum1 = (sum2 = 0);

  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }

  return `${sum1} + ${sum2} = ${sum1 + sum2}`;
}

console.log(
  sumOfTwoArray(
    [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2],
    [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]
  )
);

console.log(
  sumOfTwoArray([1, 13, 22, 123, 49], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

console.log(sumOfTwoArray([1, 22, 333, 4444, 55555], [1, 2, 3, 4, 5]));
