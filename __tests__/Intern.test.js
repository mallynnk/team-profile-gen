const Intern = require('../lib/Intern');

test('checks Intern School', () => {
    const intern = new Intern('john', 139, 'john@johnsmith.com', "Vandy")

    expect(intern.school).toEqual(expect.any(String));
});

test('check intern role', () => {
    const intern = new Intern('john', 139, 'john@johnsmith.com', "Vandy")
    
    expect(intern.getRole()).toBe("Intern");
});

test("checks school retrieval", () => {
    const intern = new Intern('john', 139, 'john@johnsmith.com', "Vandy")
    
    expect(intern.getSchool()).toBe("Vandy")
});