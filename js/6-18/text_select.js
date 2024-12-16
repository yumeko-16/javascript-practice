document.addEventListener(
  'DOMContentLoaded',
  function () {
    document.getElementById('btn').addEventListener('click', function () {
      const name = document.getElementById('name');
      console.log(name.value);
      console.log((name.value = 'Spavadee'));
    });
  },
  false,
);
