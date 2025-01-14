const obj = new Object();
console.log(obj.toString()); // 結果：[object Object]
console.log(obj.valueOf()); // 結果：{}

const dat = new Date();
console.log(dat.toString()); // 結果：Sat Sep 07 2024 22:43:40 GMT+0700 (Indochina Time)
console.log(dat.valueOf()); // 結果：1725723857728

const ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
console.log(ary.toString()); // 結果：prototype.js,jQuery,Yahoo! UI
console.log(ary.valueOf()); // 結果：['prototype.js', 'jQuery', 'Yahoo! UI']

const num = 10;
console.log(num.toString()); // 結果：10
console.log(num.valueOf()); // 結果：10

const reg = /[0-9]{3}-[0-9]{4}/g;
console.log(reg.toString()); // 結果：/[0-9]{3}-[0-9]{4}/g
console.log(reg.valueOf()); // 結果：/[0-9]{3}-[0-9]{4}/g
