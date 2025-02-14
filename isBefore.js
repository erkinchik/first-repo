function isBefore(target, base) {
  return new Date(target) < new Date(base);
}

console.log(isBefore("01.01.2023", "01.02.2022")); // false
console.log(isBefore("01.02.2022", "01.01.2023")); // true
console.log(isBefore("01.02.2022", "01.02.2022")); // false
