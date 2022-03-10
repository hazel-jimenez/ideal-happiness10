const Employee = require("../lib/Employee");
test('can set name', () => {
    var name = 'Hazel'
    var newEmployee = new Employee(name)
    expect(newEmployee.name).toEqual(name)

})