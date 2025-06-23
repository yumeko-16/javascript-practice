import { AsyncProcess } from '../modules/asyncProcess.js';

AsyncProcess('トクジロウ').then(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.log(`エラー：${error}`);
  },
);
