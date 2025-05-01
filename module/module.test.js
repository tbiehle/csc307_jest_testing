import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
});

test('Testing sum -- wrong result', () => {
    const expected = 20;
    const got = mut.sum(10, 5);
    expect(got).not.toBe(expected);
});

test('Testing division -- success', () => {
    const expected = 10;
    const got = mut.div(100, 10);
    expect(got).toBe(expected);
});

test('Testing containsNumbers -- string with numbers', () => {
    const got = mut.containsNumbers("asdf2498asdf");
    expect(got).toBeTruthy()
})

test('Testing containsNumbers -- string with no numbers', () => {
    const got = mut.containsNumbers("asdfasdf");
    expect(got).toBeFalsy()
})

test('Testing containsNumbers -- string with only numbers', () => {
    const got = mut.containsNumbers("12345");
    expect(got).toBeTruthy()
})

test('Testing containsNumbers -- empty string', () => {
    const got = mut.containsNumbers("");
    expect(got).toBeFalsy()
})

test('Testing containsNumbers -- whitespace', () => {
    const got = mut.containsNumbers(" ");
    expect(got).toBeFalsy()
})