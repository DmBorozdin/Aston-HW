// Создание объектов с помощью функции конструктора
{
    function Person(name) {
        this.name = name;
    }

    Person.prototype.logInfo = function() {
        console.log(this.name);
    }

    function Person2(name) {
        Person.call(this, name);
    }
    Person2.prototype = Object.create(Person.prototype);
    Person2.prototype.constructor = Person2;

    const personFirst = new Person("Ivan");
    const personSecond = new Person2("Keks");
    personFirst.logInfo();
    personSecond.logInfo();
    console.log(personSecond);
}


// Создание объектов с помощью класса
{
    class Person {
        constructor(name) {
            this.name = name;
        }
        
        logInfo() {
            console.log(this.name);
        }
    }

    class Person2 extends Person {
        constructor(name) {
            super(name);
        }
    }

    const personFirst = new Person("Alex");
    const personSecond = new Person2("Vova");
    personFirst.logInfo();
    personSecond.logInfo();
    console.log(personSecond);
}