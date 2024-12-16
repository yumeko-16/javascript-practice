document.addEventListener(
  'DOMContentLoaded',
  function () {
    document.getElementById('btn').addEventListener(
      'click',
      function () {
        const name = document.getElementById('name');
        const result = document.getElementById('result');

        result.innerHTML = `こんにちは、${name.value}さん`;
      },
      false,
    );
  },
  false,
);
