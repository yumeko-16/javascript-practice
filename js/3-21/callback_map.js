const data = [2, 3, 4, 5];

const result = data.map((value, index, array) => {
  return { value, index, array }; // オブジェクトを返す場合
  // return [value, index, array]; // 配列を返す場合
});

console.log(result);
