function Check(A, B) {
  if (A % 10 === 0 && B % 10 === 0) {
    return true;
  } else if (A % 10 === 0 || B % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(Check(12, 20));
console.log(Check(50, 90));
console.log(Check(43, 85));
