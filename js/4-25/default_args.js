function getTriangle(base, height) {
  if (base === undefined) {
    base = 1;
  }
  if (height === undefined) {
    height = 1;
  }
  return (base * height) / 2;
}

console.log(getTriangle(5)); // 結果：2.5
