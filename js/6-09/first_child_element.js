const s = document.getElementById('food');
let child = s.firstElementChild;
console.log(child);

while (child) {
  console.log(child.value);
  child = child.nextElementSibling;
}
