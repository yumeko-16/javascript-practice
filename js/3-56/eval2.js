const obj = { hoge: 1, foo: 2 };
const prop = 'hoge';
// eval('console.log(obj.' + prop + ')'); // 結果：1
eval('console.log(obj[prop])'); // 結果：1
