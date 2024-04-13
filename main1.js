//task1
const Ticket = {
    name: "Harry Potter",
    date: "10.04.2024",
    place: 13,
    show: function() {
        console.log("Ticket:");
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                console.log(prop + ":" + this[prop]);
            }
        }
    }
};

Ticket.show();

//task2

const Project = {
    name: "Home work",
    author: "O.Tretiakova",
    address: {
        country: "Ukraine",
        city: "Mizhhiria",
        street: "Lesyi Ukrainky",
        house: 9,
    }
};

function Show(object) {
       
    for (let key in object) {
        if (typeof object[key] === 'object') {
            Show(object[key]);
        } else {
            console.log( key + ":" + object[key]);
        }
    }
}

Show(Project);

function ExsistProperty(object,key)
{
    return object.hasOwnProperty(key) ;
}

console.log("Value: phone in Project :" + ExsistProperty(Project, 'phone'));



class User {
    static users = [];

    constructor(name, lastName, age, country, city, phone, email, job) {
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._country = country;
        this._city = city;
        this._phone = phone;
        this._email = email;
        this._job = job;
        User.users.push(this);
    }

    static DeleteUser(user) {
        let index = User.users.indexOf(user);
        if (index !== -1) {
            User.users.splice(index, 1);
        }
    }

    static ShowUser(user) {
        console.log("Name: " + user._name);
        console.log("Last Name: " + user._lastName);
        console.log("Age: " + user._age);
        console.log("Country: " + user._country);
        console.log("City: " + user._city);
        console.log("Phone: " + user._phone);
        console.log("Email: " + user._email);
        console.log("Job: " + user._job);
        console.log("------------------------");
    }

    static GetUsersWithEmail(substring) {
        for (let i = 0; i < User.users.length; i++) {
            let user = User.users[i];
            if (user._email.includes(substring)) {
                User.ShowUser(user);
            }
        }
    }

    static FoundWomanByAgeByCountry(users) {
        for (let user of users) {
            if (user._age >= 18 && user._age <= 30 && user._country === "Ukraine") {
                User.ShowUser(user);
            }
            else
            {
                console.log("This object did not found")
            }
        }
    }

    static FounAge(users)
    {
        let arrAgees = [];
        for(let user of users)
        {
            arrAgees.push(user._age)
        }

        console.log("Users age:" + arrAgees);
    }

    static FoundMaxAge(users) {
        let maxAgeUser = users[0];
    
        for (let user of users) {
            if (user._age > maxAgeUser._age) {
                maxAgeUser = user;
            }
        }
    
        return maxAgeUser;
    }
   
}

let users = [
    new User("John Doe", "Doe", 30, "USA", "New York", "123456789", "john@example.com", "Developer"),
    new User("Jane Smith", "Smith", 25, "Canada", "Toronto", "987654321", "jane@example.com", "Designer"),
    new User("Anna","Jear",25,"Ukraine","Odessa","77777777777", "ana@example.com","project manager"),
    
];

User.GetUsersWithEmail('@example.com');

User.FoundWomanByAgeByCountry(users);

User.FounAge(users);

let olderUser = User.FoundMaxAge(users);

User.ShowUser( olderUser);
