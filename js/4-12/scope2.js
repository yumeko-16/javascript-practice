scope = 'Global Variable';

function getValue() {
  scope = 'Local Variable';
  return scope;
}

console.log(getValue()); // 結果：Local Variable
console.log(scope); // 結果：Local Variable
