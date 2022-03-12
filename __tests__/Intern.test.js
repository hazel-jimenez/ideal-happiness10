const Intern = require("../lib/Intern");
test('can return school', () => {
    var email = 'admi@admi.com'
    var name = 'Hazel'
    var id = '3'
    var school = 'UCF'
    var newIntern = new Intern(name, id, email, school)

    expect(newIntern.email).toEqual(email)
    expect(newIntern.name).toEqual(name)
    expect(newIntern.id).toEqual(id)
    expect(newIntern.school).toEqual(school)
})