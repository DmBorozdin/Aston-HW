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

    console.log('______________________');
    const personFirst = new Person("Alex");
    const personSecond = new Person2("Dmitrii");
    personFirst.logInfo();
    personSecond.logInfo();
    console.log(personSecond);
}

// Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.
{
    class PersonThree {
        constructor(value) {
            this.name = value;
        }
        
        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value === undefined || value.length === 0 ? 'unknown' : value;
        }
    }

    class Person extends PersonThree {
        constructor(name) {
            super(name);
        }
    }

    console.log('______________________');
    const personFirst = new PersonThree();
    console.log(personFirst.name);
    personFirst.name = 'Alex';
    console.log(personFirst.name);

    const personSecond = new Person('Sam');
    console.log(personSecond.name);
    personSecond.name = '';
    console.log(personSecond.name);
}

// Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:
{
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    total = 13;
    //result = [4, 9]

    const firstSum = (arr, total) => {
        let start = 0;
        let end = arr.length - 1;
        while ((arr[start] + arr[end]) !== total && start < end) {
            if ((arr[start] + arr[end]) < total) {
                start++;
            } else if ((arr[start] + arr[end]) > total) {
                end--;
            }
        }
        return (arr[start] + arr[end]) === total && start !== end ? [arr[start], arr[end]] : null;
    }

    console.log('______________________');
    console.log(firstSum(arr,total));
    console.log(firstSum([1, 2, 3, 8, 9], 7));
}

// Сложность алгоритма O(n)