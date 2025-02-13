function findSndSmallest(A, B, C) {
  let secondSmallest;
  if ((A > B && A < C) || (A < B && A > C)) {
    secondSmallest = A;
  } else if ((B > A && B < C) || (B < A && B > C)) {
    secondSmallest = B;
  } else {
    secondSmallest = C;
  }
  return secondSmallest;
}

console.log(findSndSmallest(2, 9, 23));
console.log(findSndSmallest(22, 11, 33));
console.log(findSndSmallest(85, 45, 67));
