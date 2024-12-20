document.addEventListener('DOMContentLoaded', () => {
  const setListValue = (name, value) => {
    const opts = document.getElementById(name).options;
    // console.log(opts);

    // for (const opt of opts) {
    //   if (value.includes(opt.value)) {
    //     opt.selected = true;
    //   }
    // }

    // Array.from(opts)
    //   .filter((opt) => value.includes(opt.value))
    //   .map((opt) => (opt.selected = true));

    opts.forEach = Array.prototype.forEach;
    opts.forEach((opt) => {
      if (value.includes(opt.value)) {
        opt.selected = true;
      }
    });
  };

  setListValue('food', ['餃子', '焼き肉']);
});
