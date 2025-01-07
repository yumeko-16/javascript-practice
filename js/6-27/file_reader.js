document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('file');
  const result = document.getElementById('result');

  input.addEventListener('change', () => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      result.textContent = reader.result;
    });

    reader.addEventListener('error', () => {
      console.log(reader.error.message);
    });

    reader.addEventListener('abort', () => {
      console.warn('Read operation was aborted.');
    });

    reader.readAsText(input.files[0], 'UTF-8');

    reader.abort();
  });
});
