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

// 初回のasyncProcess関数呼び出し
asyncProcess('徳次郎')
  .then((response) => {
    console.log(response);
    // 初回の実行に成功したら、2回目のasyncProcess関数を実行
    return asyncProcess('任三郎');
  })
  .then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(`エラー：${error}`);
    },
  );
