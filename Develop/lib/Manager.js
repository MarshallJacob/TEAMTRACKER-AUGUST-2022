// variable calling the employee constructor to import
const Employee = require("./Employee");

// Manager constructor has more/different info than employee constructor. Here we are using extend and super to add/change original constructor for Manager criteria
class Manager extends Employee {
    constructor (name, id, email, oNumber) {
        super (name, id, emial);

        this.oNumber = oNumber;
    }
    getSchool() {
        return this.oNumber;
    }
    getRole() {
        return "Manager";
    }
};

module.exports = Manager;