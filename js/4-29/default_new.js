function getTriangle(base = 1, height = 1) {
  return (base * height) / 2;
}

// console.log(getTriangle(5)); // 結果：2.5
// console.log(getTriangle(5, null)); // 結果：0
console.log(getTriangle(5, undefined)); // 結果：2.5
