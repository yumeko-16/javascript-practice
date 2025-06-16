import { AsyncProcess } from '../7-32/asyncProcess.js';
AsyncProcess('トクジロウ')
    .then((response) => {
    console.log(response);
    return AsyncProcess('ニンサブロウ');
})
    .then((response) => {
    console.log(response);
}, (error) => {
    console.log(`エラー：${error}`);
});
