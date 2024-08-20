const ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
const ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

console.log(ary1.length); // 結果：6
console.log(Array.isArray(ary1)); // true
console.log(ary1.toString()); // Sato, Takae, Osada, Hio, Sitoh, Sato
console.log(ary1.indexOf('Sato')); // 0
console.log(ary1.lastIndexOf('Sato')); // 5

console.log(ary1.concat(ary2)); // ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato', 'Yabuki', 'Aoki', 'Moriyama', 'Yamada']

console.log(ary1.join('/')); // 結果：Sato / Takae / Osada / Hio / Saitoh / Sato
console.log(ary1.slice(1)); // ['Takae', 'Osada', 'Hio', 'Saitoh', 'Sato']
console.log(ary1.slice(1, 2)); // ['Takae']
console.log(ary1.splice(1, 2, 'aaa', 'bbb')); // ['Takae', 'Osada']（置き換え対象の要素を取得）
console.log(ary1); // ['Sato', 'aaa', 'bbb', 'Hio', 'Saitoh', 'Sato']
console.log(Array.of(20, 40, 60)); // [20, 40, 60]
console.log(ary1.copyWithin(1, 3, 5)); // ['Sato', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Sato']
console.log(ary1.copyWithin(0, 4, 5)); // ['Saitoh', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Sato']

console.log(ary1.pop()); // Sato（削除した要素）
console.log(ary1); // ['Saitoh', 'Hio', 'Saitoh', 'Hio', 'Saitoh']
console.log(ary1.push('Kondo')); // 6（追加後の要素数）
console.log(ary1); // ['Saitoh', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Kondo']
console.log(ary1.shift()); // Hio（削除した要素）
console.log(ary1); // ['Hio', 'Saitoh', 'Hio', 'Saitoh', 'Kondo']
console.log(ary1.unshift('Ozawa', 'Kuge')); // 7（追加後の要素数）
console.log(ary1); // ['Ozawa', 'Kuge', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Kondo']
console.log(ary1.reverse()); // ['Kondo', 'Saitoh', 'Hio', 'Saitoh', 'Hio', 'Kuge', 'Ozawa']（反転後の配列）
console.log(ary1); // ['Kondo', 'Saitoh', 'Hio', 'Saitoh', 'Hio', 'Kuge', 'Ozawa']（反転後の配列）
console.log(ary1.sort()); // ['Hio', 'Hio', 'Kondo', 'Kuge', 'Ozawa', 'Saitoh', 'Saitoh']
console.log(ary1); // ['Hio', 'Hio', 'Kondo', 'Kuge', 'Ozawa', 'Saitoh', 'Saitoh']
