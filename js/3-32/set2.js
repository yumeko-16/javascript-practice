let s = new Set();
s.add(NaN);
s.add(NaN);
console.log(s.size); // 結果：1（同じ値は無視）

s.add({});
s.add({});
console.log(s.size); // 結果：3（異なるオブジェクトとして追加）
