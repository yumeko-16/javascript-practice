function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値：${value}`);
      } else {
        reject('入力値は空です');
      }
    }, 3000);
  });
}

Promise.all([
  asyncProcess('徳次郎'),
  asyncProcess('任三郎'),
  asyncProcess('りんりん'),
]).then(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.log(`エラー：${error}`);
  },
);
