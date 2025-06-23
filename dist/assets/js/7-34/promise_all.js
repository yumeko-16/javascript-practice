import { AsyncProcess } from '../modules/asyncProcess.js';
Promise.all([
    AsyncProcess('トクジロウ'),
    AsyncProcess('ニンザブロウ'),
    AsyncProcess('リンリン'),
]).then((response) => {
    console.log(response);
}, (error) => {
    console.log(`エラー：${error}`);
});
