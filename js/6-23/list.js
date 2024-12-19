document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');

  const getSelectValue = (name) => {
    const result = [];
    const opts = document.getElementById(name).options;
    const optsArray = Array.from(opts);

    for (const opt of optsArray) {
      if (opt.selected) {
        result.push(opt.value);
      }
    }

    return result;
  };

  btn.addEventListener('click', () => {
    window.alert(getSelectValue('food'));
  });
});
