const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, school);
        this.school = school;
    };
    
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    };
};

module.exports = Intern