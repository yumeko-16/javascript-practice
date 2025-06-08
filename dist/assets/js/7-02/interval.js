"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const btnEl = document.getElementById('btn');
    const resultEl = document.getElementById('result');
    if (!btnEl || !resultEl) {
        return;
    }
    // const timer = window.setInterval(() => {
    const timer = window.setTimeout(() => {
        const dat = new Date();
        resultEl.textContent = dat.toLocaleTimeString();
    }, 5000);
    btnEl.addEventListener('click', () => {
        // window.clearInterval(timer);
        window.clearTimeout(timer);
    });
});
