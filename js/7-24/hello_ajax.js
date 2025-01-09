document.addEventListener('DOMContentLoaded', () => {
  const name = document.getElementById('name');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  console.log(name, btn, result);

  btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('loadstart', () => {
      result.textContent = '通信中…';
    });

    xhr.addEventListener('load', () => {
      result.textContent = xhr.responseText;
    });

    xhr.addEventListener('error', () => {
      result.textContent = 'サーバーエラーが発生しました。';
    });

    // サーバーとの非同期通信を開始
    // xhr.open(
    //   'GET',
    //   'hello_ajax.php?name=' + encodeURIComponent(name.value),
    //   true,
    // );
    // xhr.send(null);
    xhr.open('POST', 'hello_ajax.php', true);
    xhr.setRequestHeader(
      'content-type',
      'application/x-www-form-urlencoded;charset=UTF-8',
    );
    xhr.send('name=' + encodeURIComponent(name.value));
  });
});
