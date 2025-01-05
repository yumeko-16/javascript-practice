const param = 'height, width';
const formula = 'return height * width / 2';
const diamond = new Function(param, formula);
console.log('菱形の面積：' + diamond(5, 2)); // 結果：5
