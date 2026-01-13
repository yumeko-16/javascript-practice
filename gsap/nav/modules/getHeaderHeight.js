export default function getHeaderHeight() {
  const header = document.getElementById('header');
  return header ? header.offsetHeight : 0;
}
