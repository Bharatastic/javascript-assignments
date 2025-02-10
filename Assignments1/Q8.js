function Sum(A, B, C) {
  return A + B + C;
}

function Average(callback) {
  return callback / 3;
}

const argsSet1 = [50, 20, 100];
console.log(Sum(...argsSet1));
console.log(Average(Sum(...argsSet1)));

const argsSet2 = [42, 76, 19];
console.log(Sum(...argsSet2));
console.log(Average(Sum(...argsSet2)));

const argsSet3 = [91, 82, 73];
console.log(Sum(...argsSet3));
console.log(Average(Sum(...argsSet3)));

const argsSet4 = [98, 87, 76];
console.log(Sum(...argsSet4));
console.log(Average(Sum(...argsSet4)));