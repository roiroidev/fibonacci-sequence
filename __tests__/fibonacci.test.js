const fibo = require('../fibo');

describe('fibo.js test', () => {
    test('test fibo.fibonacci', () => {
        console.log('give 0 as an argument');
        expect(fibo.fibonacci(0)).toBe(0);
    });
});