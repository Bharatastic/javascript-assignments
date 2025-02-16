function findGrades(M) {
  switch (true) {
    case M <= 10:
      return "E";

    case M >= 11 && M <= 20:
      return "D";

    case M >= 21 && M <= 30:
      return "C";

    case M >= 31 && M <= 40:
      return "B";

    case M >= 41 && M <= 50:
      return "A";

    default:
      return "Invalid Marks";
  }
}

console.log(findGrades(9));
console.log(findGrades(12));
console.log(findGrades(23));
console.log(findGrades(32));
console.log(findGrades(43));
console.log(findGrades(54));
