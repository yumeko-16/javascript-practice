'use strict';

const x = 1;
const y = 0;

try {
  if (y === 0) {
    throw new Error('0で除算しようとしました。');
  }
} catch (e) {
  console.log(e.message);
}
