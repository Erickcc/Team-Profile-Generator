// Import the Employee class
const Employee = require("./employee");

// Engineer class, extends to Employee
class Engineer extends Employee {
    // Constructor
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // Returns the current obj github profile
    getGithub() {
        return this.github;
    }
    // Returns the current obj role
    getRole() {
        return 'Engineer';
    }
}

// Exports the Engineer class
module.exports = Engineer;