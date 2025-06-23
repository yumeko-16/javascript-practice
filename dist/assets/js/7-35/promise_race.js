import { AsyncProcess } from '../modules/asyncProcess.js';
Promise.race([
    AsyncProcess('トクジロウ'),
    AsyncProcess('ニンザブロウ'),
    AsyncProcess('リンリン'),
]).then((response) => {
    console.log(response);
}, (error) => {
    console.log(`エラー：${error}`);
});
