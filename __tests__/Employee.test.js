const Employee = require('../lib/Employee');

test("checks employee name, id, and email", () => {
    const employee = new Employee('john', '1002', 'john@johnsmith.com')

    expect(employee.name).toBe('john');
    expect(employee.id).toBeGreaterThan(0);
    expect(employee.email).toBe('john@johnsmith.com');
})