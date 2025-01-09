document.addEventListener('DOMContentLoaded', () => {
  const name = document.getElementById('name');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  console.log(name, btn, result);

  btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // 通信が完了した時
        if (xhr.status === 200) {
          // 通信が成功した時
          result.textContent = xhr.responseText;
        } else {
          // 通信が失敗した時
          result.textContent = 'サーバーエラーが発生しました。';
        }
      } else {
        // 通信が完了する前
        result.textContent = '通信中...';
      }
    };

    // サーバーとの非同期通信を開始
    xhr.open(
      'GET',
      'hello_ajax.php?name=' + encodeURIComponent(name.value),
      true,
    );
    xhr.send(null);
  });
});
