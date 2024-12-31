let pet = {
  type: 'スノーホワイトハムスター',
  name: 'キラ',
  description: {
    birth: '2014-02-15',
  },
};

let pet2 = {
  name: '山田きら',
  color: '白',
  description: {
    food: 'ひまわりのタネ',
  },
};

let pet3 = {
  weight: 42,
  photo: 'http://www.wings.msn.to/img/ham.jpg',
};

// 空のオブジェクトにpet1~3をマージ（元のオブジェクトに影響は出ない）
let merged = Object.assign({}, pet, pet2, pet3);
console.log(pet);

// petオブジェクトにpet2とpet3をマージ（pet2とpet3にある同名のプロパティで上書きされる）
Object.assign(pet, pet2, pet3);
console.log(pet);
