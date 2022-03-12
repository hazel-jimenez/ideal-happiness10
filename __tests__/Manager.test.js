const Manager = require("../lib/Manager");
test('can return office number', () => {
    var email = 'admi@admi.com'
    var name = 'Hazel'
    var id = '3'
    var officeNumber = '555-555-5555'
    var newManager = new Manager(name, id, email, officeNumber)

    expect(newManager.email).toEqual(email)
    expect(newManager.name).toEqual(name)
    expect(newManager.id).toEqual(id)
    expect(newManager.officeNumber).toEqual(officeNumber)
})