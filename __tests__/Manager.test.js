const Manager = require('../lib/Manager');

test('checks Manager office number', () => {
    const manager = new Manager('john', 139, 'john@johnsmith.com', 10)

    expect(manager.office).toEqual(expect.any(Number));
});

test('check manager role', () => {
    const manager = new Manager('john', 139, 'john@johnsmith.com', 10)
    
    expect(manager.getRole()).toBe("Manager");
});