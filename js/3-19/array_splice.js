const data = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];

console.log(data.splice(3, 2, 'Yamada', 'Suzuki')); // 結果：['Hio', 'Saitoh']
console.log(data); // 結果：['Sato', 'Takae', 'Osada', 'Yamada', 'Suzuki']
console.log(data.splice(3, 2)); // 結果：['Yamada', 'Suzuki']
console.log(data); // 結果：['Sato', 'Takae', 'Osada']
console.log(data.splice(1, 0, 'Tanaka')); // 結果：[]
console.log(data); // 結果：['Sato', 'Tanaka', 'Takae', 'Osada']
