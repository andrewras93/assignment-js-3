'use strict'

function C2F(c) {
    return c * 1.8000 + 32.00;
}

function F2C(f) {
    return (f - 32) * .5556;
}

console.log(C2F(1));
console.log(F2C(50));