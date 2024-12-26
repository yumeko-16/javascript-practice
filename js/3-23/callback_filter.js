const data = [4, 9, 16, 25];

const result = data.filter((value, index, array) => {
  return value % 2 === 1;
});

console.log(result);
