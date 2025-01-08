document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('file');
  const result = document.getElementById('result');

  input.addEventListener('change', () => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      result.src = reader.result;
    });

    console.log(input.files[0]);
    reader.readAsDataURL(input.files[0]);
  });
});
