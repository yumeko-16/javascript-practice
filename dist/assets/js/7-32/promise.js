import { AsyncProcess } from './asyncProcess.js';
AsyncProcess('トクジロウ').then((response) => {
    console.log(response);
}, (error) => {
    console.log(`エラー：${error}`);
});
