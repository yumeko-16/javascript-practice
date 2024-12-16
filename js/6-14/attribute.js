document.addEventListener(
  'DOMContentLoaded',
  () => {
    const logo = document.getElementById('logo');
    const attrs = logo.attributes;
    const attrsArray = [...logo.attributes];

    for (const attr of attrs) {
      console.log(`${attr.name}：${attr.value}`);
    }

    attrsArray.forEach((attr) => {
      console.log(`${attr.name}：${attr.value}`);
    });
  },
  false,
);
