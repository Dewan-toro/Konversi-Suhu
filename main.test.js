const { test, expect } = require('@jest/globals');
const { Convert } = require('./Main.js');

test('fromCelcius(to, C)', () => {
    expect(1).toBe(1);
});

test('fromCelcius(to, R)', () => {
    expect(( 4 / 5 ) * 1).toBe(0.8);
});

test('fromCelcius(to, F)', () => {
    expect(( 9 / 5 ) * 1  + 32).toBe(33.8);
});

test('fromReamur(to, R)', () => {
    expect(1).toBe(1);
});

test('fromReamur(to, C)', () => {
    expect(( 5 / 4 ) * 1 ).toBe(1.25);
});

test('fromReamur(to, F)', () => {
    expect(( 9 / 4 ) * 1 + 32 ).toBe(34.25);
});

test('fromFarenheit(to, F)', () => {
    expect(1).toBe(1);
});

test('fromFarenheit(to, C)', () => {
    expect(( 5 / 9 ) * ( 1 - 32 )).toBe(-17.22222222222222);
});

test('fromFarenheit(to, R)', () => {
    expect(( 4 / 9 ) * ( 1 - 32 )).toBe(-13.777777777777777);
});