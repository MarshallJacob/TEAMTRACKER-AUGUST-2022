// This is pulling the constructor from Engineer.js
const Engineer = require('../lib/Engineer');

// This will create a scenario to test the engineer object. Specifically looking for github info and then role
test('creates an engineer object', () => {
    const engineer = new Engineer('Max', 1002, 'madmax@maxmax.com', 'max99');

    expect(engineer.github).toEqual(expect.any(String));

});



// This will retrieve the role information, identifying that it's different from the others
test('gets role of employee', () => {
    const engineer = new Engineer('Max', 1002, 'madmax@maxmax.com', 'max99');

    
    expect(engineer.getRole()).toEqual("Engineer");
}); 
