// strictモードで使用しようとするとエラーが発生する。

const box = document.getElementById('box');

with (box.style) {
  backgroundColor = 'red';
  color = 'white';
  fontSize = '24px';
  padding = '10px';
}

const person = {
  firstName: '太郎',
  lastName: '山田',
  age: 25,
};

with (person) {
  console.log(`${firstName} ${lastName}（${age}歳）`);
}
