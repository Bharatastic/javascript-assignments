function First_Digit(N) {
  let result = Math.floor(N / 1000);
  return result;
}

console.log(First_Digit(1234));
console.log(First_Digit(4321));
console.log(First_Digit(5678));
console.log(First_Digit(9876));
console.log(First_Digit(7865));
