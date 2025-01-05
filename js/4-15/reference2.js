var value = [1, 2, 4, 8, 16];

function deleteElement(value) {
  value.pop(); // 末尾の要素を削除
  return value;
}

console.log(deleteElement(value)); // 結果：[1, 2, 4, 8]
console.log(value); // 結果：[1, 2, 4, 8]
