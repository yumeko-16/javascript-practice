document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('file');
  const result = document.getElementById('result');

  input.addEventListener('change', () => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      result.textContent = reader.result;
    });

    reader.readAsText(input.files[0], 'UTF-8');
  });
});
