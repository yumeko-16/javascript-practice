const data = [4, 9, 16, 25];

const result = data.some((value, index, array) => {
  return value % 3 === 0; // 1つでも条件に合致する要素があれば、trueを返す
});

if (result) {
  console.log('3の倍数が見つかりました。');
} else {
  console.log('3の倍数が見つかりませんでした。');
}
