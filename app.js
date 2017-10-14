
//Primer ejercicio de la clase para demostra que la sintaxis es identca a los otros lenuajes
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


//Comenzamos a manejar partes del dom
function changeRed() {
    document.getElementById('p1').style.color = 'red'
}

function changeGreen() {
    document.getElementById('p1').style.color = 'green'
}




//Declaramos una variable para remarcar la importancia que tienen los objetos en el lenguaje y definimospropiedades
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


//Definimos metodos
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




//Froma viejita de definir una clase
function PersonaViejita(primerNombre, año) {
  this.primerNombre = primerNombre;
  this.diHola = function() {
  console.log('Hola, Soy ' + this.primerNombre);
  };
  this.diTardes = function() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        console.log("Good morning");
    } else if (time < 20) {
        console.log("Good day");
    } else {
        console.log("Good evening");
    }
  };
}



var persona1 = new PersonaViejita("Alicia");
var persona2 = new PersonaViejita("Sebastian");

// Llamadas al método diHola de la clase Persona.
persona1.diHola(); // muestra "Hola, Soy Alicia"
persona2.diHola(); // muestra "Hola, Soy Sebastian"
persona2.diTardes(); // muestra "Hola, Soy Sebastian"

//La manera nueva de definir las clases apartir de ecma 2015

class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

var rect = new Rectangulo(10, 5);
console.log(rect.calcularArea());





//La manera nueva de definir las clases apartir de ecma 2015
  class Persona{

  constructor(primerNombre){
    this.primerNombre = primerNombre;
  }

  diHola(){
  console.log('Hola, Soy ' + this.primerNombre);
  };
  diTardes() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        console.log("Good morning2");
    } else if (time < 20) {
        console.log("Good day2");
    } else {
        console.log("Good evening2");
    }
  };
}



var persona1 = new Persona("AliciaNew");
var persona2 = new Persona("SebastianNew");

// Llamadas al método diHola de la clase Persona.
persona1.diHola(); // muestra "Hola, Soy Alicia"
persona2.diHola(); // muestra "Hola, Soy Sebastian"
persona2.diTardes(); // muestra "Hola, Soy Sebastian"
