function Max_out_of_three(A, B, C) {
  let largestNumber;
  if (A > B) {
    if (A > C) {
      largestNumber = A;
    } else {
      largestNumber = C;
    }
  } else {
    if (B > C) {
      largestNumber = B;
    } else {
      largestNumber = C;
    }
  }
  return largestNumber;
}

console.log(Max_out_of_three(2, 5, 10));
console.log(Max_out_of_three(8, 9, 7));
console.log(Max_out_of_three(11, 22, 33));
