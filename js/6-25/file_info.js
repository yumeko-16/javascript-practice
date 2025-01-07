document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('file').addEventListener('change', (e) => {
    const inputs = document.getElementById('file').files;
    console.log(inputs);

    for (const input of inputs) {
      console.log(`ファイル名：${input.name}`);
      console.log(`種類：${input.type}`);
      console.log(`サイズ：${input.size / 1024}KB`);
      console.log(`最終更新日：${input.lastModifiedDate}`);
    }
  });
});
