function changeRed() {
    document.getElementById('p1').style.color = 'red'
}

function changeGreen() {
    document.getElementById('p1').style.color = 'green'
}


var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

function objectPerson() {
    document.getElementById("demo").innerHTML =
        person.firstName + " is " + person.age + " years old.";
}

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    job: 'devloper',
    fullName: function() {
        return this.firstName + " " + this.lastName + ' y mi trabajo es ' + this.job
    }
};

function objectPersonMethod() {

    document.getElementById("demo").innerHTML = person.fullName();
}


function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        console.log("Good morning");
    } else if (time < 20) {
        console.log("Good day");
    } else {
        console.log("Good evening");
    }
}