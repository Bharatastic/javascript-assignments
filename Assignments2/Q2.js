function getValue(char) {
  if (char == "P" || char == "p") {
    return "PrepBytes";
  } else {
    if (char == "Z" || char == "z") {
      return "Zenith";
    } else {
      if (char == "E" || char == "e") {
        return "Expert Coder";
      } else {
        if (char == "D" || char == "d") {
          return "Data Structure";
        } else {
          return "Invalid Character";
        }
      }
    }
  }
}

console.log(getValue("P"));
console.log(getValue("z"));
console.log(getValue("E"));
console.log(getValue("d"));
console.log(getValue("A"));
