function multiplesOf() {
  let result = "";
  for (let i = 1; i <= 45; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += `${i}: FizzBuzz\n`;
    } else if (i % 5 === 0) {
      result += `${i}: Buzz\n`;
    } else if (i % 3 === 0) {
      result += `${i}: Fizz\n`;
    } else {
      result += `${i}\n`;
    }
  }
  return result;
}

console.log(multiplesOf());
