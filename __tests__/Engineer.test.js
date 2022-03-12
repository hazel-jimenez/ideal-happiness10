const Engineer = require("../lib/Engineer");
test('can create Engineer correctly', () => {
    var email = 'admi@admi.com'
    var name = 'Hazel'
    var id = '3'
    var github = 'octo-ten'
    var newEngineer = new Engineer(name, id, email, github)

    expect(newEngineer.email).toEqual(email)
    expect(newEngineer.name).toEqual(name)
    expect(newEngineer.id).toEqual(id)
    expect(newEngineer.github).toEqual(github)

})

test('can get role', () => {
    var email = 'admi@admi.com'
    var name = 'Hazel'
    var id = '3'
    var github = 'octo-ten'
    var newEngineer = new Engineer(name, id, email, github)
    var engineerRole = newEngineer.getRole()

    expect(engineerRole).toEqual('Engineer')

})

test('can get github', () => {
    var email = 'admi@admi.com'
    var name = 'Hazel'
    var id = '3'
    var github = 'octo-ten'
    var newEngineer = new Engineer(name, id, email, github)
    var getGithub = newEngineer.getGithub()

    expect(getGithub).toEqual(github)

})
