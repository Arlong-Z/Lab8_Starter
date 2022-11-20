// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//test isOhoneNumber
test('6268582251 is not phoneNumber', () => {
    expect(functions['isPhoneNumber']('6268582251')).toBe(false);
});

test('626 858 22515 is not phoneNumber', () => {
    expect(functions['isPhoneNumber']('626 858 22515')).toBe(false);
});

test('(626) 858-2251 is phoneNumber', () => {
    expect(functions['isPhoneNumber']('(626) 858-2251')).toBe(true);
});

test('(685) 858-7745 is phoneNumber', () => {
    expect(functions['isPhoneNumber']('(685) 858-7745')).toBe(true);
});

//test isEmail()
test('78452 is not email', () => {
    expect(functions['isEmail']('78452')).toBe(false);
});

test('78452@ is not email', () => {
    expect(functions['isEmail']('78452@')).toBe(false);
});

test('78452@gmail.com is email', () => {
    expect(functions['isEmail']('78452@gmail.com')).toBe(true);
});

test('78452yyds@tt.com is email', () => {
    expect(functions['isEmail']('78452yyds@tt.com')).toBe(true);
});

// test isStrongPassword()
test('abcdefg is not strong password', () => {
    expect(functions['isStrongPassword']('78452')).toBe(false);
});

test('k is not strong password', () => {
    expect(functions['isStrongPassword']('k')).toBe(false);
});

test('ABCdE is strong password', () => {
    expect(functions['isStrongPassword']('ABCdE')).toBe(true);
});

test('AAcc is strong password', () => {
    expect(functions['isStrongPassword']('AAcc')).toBe(true);
});

// test isDate
test('11/20/22 is not a date', () => {
    expect(functions['isDate']('11/20/22')).toBe(false);
});

test('11202022 is not a date', () => {
    expect(functions['isDate']('11202022')).toBe(false);
});

test('11/20/2022 is a date', () => {
    expect(functions['isDate']('11/20/2022')).toBe(true);
});

test('1/20/2022 is a date', () => {
    expect(functions['isDate']('1/20/2022')).toBe(true);
});

//test isHexColor
test('opq is not a HexColor', () => {
    expect(functions['isHexColor']('opq')).toBe(false);
});

test('ffff is not a HexColor', () => {
    expect(functions['isHexColor']('ffff')).toBe(false);
});

test('fff is a HexColor', () => {
    expect(functions['isHexColor']('fff')).toBe(true);
});

test('017 is a HexColor', () => {
    expect(functions['isHexColor']('017')).toBe(true);
});