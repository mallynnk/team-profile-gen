const Employee = require('../lib/Employee');

test("checks employee name, id, and email", () => {
    const employee = new Employee('john', 1002, 'john@johnsmith.com')

    expect(employee.name).toBe('john');
    expect(employee.id).toBeGreaterThan(0);
    expect(employee.email).toBe('john@johnsmith.com');
})

test("checks name retrieval", () => {
    const employee = new Employee('john', 1002, 'john@johnsmith.com')

    expect(employee.getName()).toEqual(expect.any(String));
})

test("checks Id retrieval", () => {
    const employee = new Employee('john', 1002, 'john@johnsmith.com')

    expect(employee.getId()).toEqual(expect.any(Number));
})


test("checks email retrieval", () => {
    const employee = new Employee('john', 1002, 'john@johnsmith.com')

    expect(employee.getEmail()).toEqual(expect.any(String));
})


test("checks role retrieval", () => {
    const employee = new Employee('john', 1002, 'john@johnsmith.com')

    expect(employee.getRole()).toBe("Employee")
});