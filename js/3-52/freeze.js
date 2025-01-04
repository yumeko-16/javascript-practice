'use strict';

const pet = {
  type: 'スノーホワイトハムスター',
  name: 'キラ',
};

// 以下をそれぞれコメント解除して、動作を確認
Object.preventExtensions(pet); // weightプロパティを追加できない
Object.seal(pet); // typeプロパティを削除できない
Object.freeze(pet); // nameプロパティは読み取り専用

// 既存のプロパティ値を変更
pet.name = '山田きら';
// 既存のプロパティを削除
delete pet.type;
// 新規のプロパティを追加
pet.weight = 42;
