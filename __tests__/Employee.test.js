const Employee = require("../lib/Employee");
test('can set name', () => {
    var name = 'Hazel'
    var newEmployee = new Employee(name)
    expect(newEmployee.name).toEqual(name)

})
test('can set id', () => {
    var id = '3'
    var newEmployee = new Employee('name',id)
    expect(newEmployee.id).toEqual(id)

})
test('can set email', () => {
    var email = 'admi@admi.com'
    var newEmployee = new Employee('name', 'id', email)
    expect(newEmployee.email).toEqual(email)

})