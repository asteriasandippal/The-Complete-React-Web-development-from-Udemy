const add = (a, b) => a + b;

const generateGreeting = (name = 'Annonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 5);
    expect(result).toBe(8);
});

test('Should generate greeting from name', () => {
    const result = generateGreeting('Sandip');
    expect(result).toBe('Hello Sandip!');
});

test('Should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Annonymous!');
});
