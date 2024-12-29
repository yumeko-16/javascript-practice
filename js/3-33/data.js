let getTriangle = function (base, height) {
  return (base * height) / 2;
};

console.log(getTriangle(5, 2)); // 結果：5
getTriangle = 0;
console.log(getTriangle); // 結果：0
