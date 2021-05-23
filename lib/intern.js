// Import the Employee class
const Employee = require("./employee");

// Intern cass, extends to Employee
class Intern extends Employee {
    // Constructor
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // Returns the current obj school name
    getSchool() {
        return this.school;
    }
    // Returns the current obj role
    getRole() {
        return 'Intern';
    }
}
// Exports the Intern class
module.exports = Intern;