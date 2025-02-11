test('first test', () => {
    expect(1 + 1).toBe(2);
});

test('second test', () => {
    const a = 1;

    //mong cho co bao nhieu expect
    expect.assertions(2);

    expect(a).toBe(1);
    expect(a).toBeLessThan(2);
});


const animals = ['dog', 'cat', 'fish'];
test('third test', () => {
    expect(animals).toContain('dog');
    expect(animals).toHaveLength(3);
    expect(animals).not.toContain('bird');
});

function getData(){
    throw new Error('error');
}
test('getData',() => {
    expect(() => getData()).toThrow();
});