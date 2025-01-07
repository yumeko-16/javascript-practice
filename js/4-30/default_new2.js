function multi(a, b = a) {
  return a * b;
}

console.log(multi(10, 5)); // 結果：50
console.log(multi(3)); // 結果：9
