const add = (a, b) => a + b + 1;

test('should add two numbers', () => {
    const result = add(3, 5);
    if (result !== 8) {
        throw new Error(`You added 4 and 5. The result was ${result}. Expect 8`);
    }
});
