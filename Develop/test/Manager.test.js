// This is pulling the constructor from Manager.js
const Manager = require('../lib/Manager');

// This will create a scenario to test the intern object. Specifically looking for office number info and then role
test('creates an intern object', () => {
    const manager = new Manager('Caite', 1000, 'caite@bigboss.com', '101');

    expect(manager.oNumber).toEqual(expect.any(String));

});



// This will retrieve the role information, identifying that it's different from the others
test('gets role of employee', () => {
    const manager = new Manager('Caite', 1000, 'caite@bigboss.com', '101');

    
    expect(manager.getRole()).toEqual("Manager");
}); 
