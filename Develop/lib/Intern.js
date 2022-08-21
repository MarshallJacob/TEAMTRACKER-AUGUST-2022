// variable calling the employee constructor to import
const Employee = require("./Employee");

// Intern constructor has more/different than employee constructor. Here we are using extend and super to add/change original constructor for Intern criteria
class Intern extends Employee {
    constructor (name, id, email) {
        super (name, id, emial);

        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
};

module.exports = Intern;