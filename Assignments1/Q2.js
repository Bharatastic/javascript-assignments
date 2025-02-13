function Is_Valid(A, B) {
  if (A < 10 && A > B) {
    return true;
  } else {
    return false;
  }
}

console.log(Is_Valid(5, 2));  
console.log(Is_Valid(12, 3)); 
console.log(Is_Valid(8, 10)); 
console.log(Is_Valid(9, 9));  
