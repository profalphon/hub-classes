// creating objects

class Users {
    constructor(email, name, login) {
        this.email = email;
        this.name = name;
        this.login = login;
        this.loginMessage = function () {
            if (this.login == "Egwali"){
                return `${name} has successfully logged in`
            } else{
                return `Please try again`
            }

        }
    }
}

let obi = "Egwali"

const Ogoro = new Users("ogoro@gmail.com", "king", obi);

console.log(Ogoro.loginMessage());