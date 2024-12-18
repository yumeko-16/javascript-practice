document.addEventListener('DOMContentLoaded', () => {
  const setCheckValue = (name, value) => {
    const elems = document.getElementsByName(name);
    // console.log(elems);

    // for (const elem of elems) {
    //   if (value.indexOf(elem.value) > -1) {
    //     elem.checked = true;
    //   }
    // }

    elems.forEach((elem) => {
      if (value.includes(elem.value)) {
        elem.checked = true;
      }
    });
  };

  setCheckValue('food', ['餃子', '焼き肉']);
});
