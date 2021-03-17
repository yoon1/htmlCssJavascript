var f = () => { 'use strict'; return this; };
f() === window; // 혹은 전역객체
console.log(f);