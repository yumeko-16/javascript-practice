const ary = [5, 25, 10];

console.log(ary.sort()); // 結果：[10, 25, 5]（文字列としてソート）
console.log(
  ary.sort((x, y) => {
    return x - y;
  }),
); // 結果：[5,10,25]（数値としてソート）
