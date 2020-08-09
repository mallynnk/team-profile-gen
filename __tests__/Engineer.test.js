const Engineer = require('../lib/Engineer');

test('checks Engineer GitHub', () => {
    const engineer = new Engineer('john', 139, 'john@johnsmith.com', "jonnyboy")

    expect(engineer.github).toEqual(expect.any(String));
});

test('check engineer role', () => {
    const engineer = new Engineer('john', 139, 'john@johnsmith.com', "jonnyboy")
    
    expect(engineer.getRole()).toBe("Engineer");
});

test("checks github account", () => {
    const engineer = new Engineer('john', 139, 'john@johnsmith.com', "jonnyboy")
    
    expect(engineer.getGithub()).toBe("jonnyboy")
});