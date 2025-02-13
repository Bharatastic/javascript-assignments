function Triangle_Check(A, B, C) {
  if (A + B + C == 180) {
    if (A < 90 && B < 90 && C < 90) {
      return "Acute";
    }
    else if (A > 90 || B > 90 || C > 90) {
      return "Obtuse";
    } else {
        return "Right"
    }
  } else {
    return "Not a triangle";
  }
}

console.log(Triangle_Check(60, 60, 60));
console.log(Triangle_Check(96, 47, 37));
console.log(Triangle_Check(90, 45, 45));
console.log(Triangle_Check(30, 120, 40));
