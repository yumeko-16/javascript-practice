'use strict';

const flag = new Boolean(false); // オブジェクト型のBooleanが生成される
// const flag = false; // プリミティブ型
console.log(flag);

if (flag) {
  // オブジェクトが存在するため、常にtrueとして扱われる
  console.log('flagはtrueです');
}
