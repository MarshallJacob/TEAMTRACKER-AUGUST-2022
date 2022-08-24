// This is pulling the constructor from Intern.js
const Intern = require('../lib/Intern');

// This will create a scenario to test the intern object. Specifically looking for school info and then role
test('creates an intern object', () => {
    const intern = new Intern('Victoria', 1003, 'victoria@victory.com', 'UofU');

    expect(intern.school).toEqual(expect.any(String));

});



// This will retrieve the role information, identifying that it's different from the others
test('gets role of employee', () => {
    const intern = new Intern('Victoria', 1003, 'victoria@victory.com', 'UofU');

    
    expect(intern.getRole()).toEqual("Intern");
}); 
