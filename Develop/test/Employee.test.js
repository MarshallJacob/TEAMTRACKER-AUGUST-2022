// This is pulling the constructor from Employee.js
const Employee = require('../lib/Employee');

// This will create a scenario to test the employee object 
test('creates an employee object', () => {
    const employee = new Employee('Charles', 1001, 'charles@bigcharlie.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});


// This will retrieve the name
test('gets employee name', () => {
    const employee = new Employee('Charles', 1001, 'charles@bigcharlie.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


// This will retrieve the ID information
test('gets employee ID', () => {
    const employee = new Employee('Charles', 1001, 'charles@bigcharlie.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});


// This will retrieve the email information
test('gets employee email', () => {
    const employee = new Employee('Charles', 1001, 'charles@bigcharlie.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


// This will retrieve the role information
test('gets role of employee', () => {
    const employee = new Employee('Charles', 1001, 'charles@bigcharlie.com');


    expect(employee.getRole()).toEqual("Employee");
}); 
