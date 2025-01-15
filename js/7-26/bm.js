document.addEventListener('DOMContentLoaded', () => {
  const url = document.getElementById('url');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const xhr = new XMLHttpRequest();

  btn.addEventListener('click', () => {
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // 通信が完了した時
        if (xhr.status === 200) {
          // 通信が成功した時
          const data = JSON.parse(xhr.responseText);

          // 結果からbookmarksキーにアクセス
          if (data === null) {
            // ブックマークがなかった場合には、エラーメッセージを表示
            result.textContent = 'ブックマークは存在しませんでした。';
          } else {
            // ブックマークが取得できた場合、ユーザーをリスト表示
            const bms = data.bookmarks;
            const ul = document.createElement('ul');

            for (let i = 0; i < bms.length; i++) {
              const li = document.createElement('li');
              const anchor = document.createElement('a');
              anchor.href = 'http://p.hatena.ne.jp/' + bms[i].user;
              const text = document.createTextNode(
                bms[i].user + ' ' + bms[i].comment,
              );
              anchor.appendChild(text);
              li.appendChild(anchor);
              ul.appendChild(li);
            }

            // <div id="result">のは以下を<ul>要素に置き換え
            result.replaceChild(ul, result.firstChild);
          }
        } else {
          // 通信が失敗した時
          result.textContent = 'サーバーエラーが発生しました。';
        }
      } else {
        // 通信が完了する前
        result.textContent = '通信中…';
      }
    };

    xhr.open('GET', 'bm.php?url=' + encodeURIComponent(url.value), true);
    xhr.send(null);
  });
});
