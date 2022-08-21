// variable calling the employee constructor to import
const Employee = require("./Employee");

// Engineer constructor has more/different than employee constructor. Here we are using extend and super to add/change original constructor for Engineer criteria
class Engineer extends Employee {
    constructor (name, id, email) {
        super (name, id, emial);

        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer