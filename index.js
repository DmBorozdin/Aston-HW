const cloneDeep = require('lodash.clonedeep');

// Задание 1 – Создать объект counter всеми возможными способами;
// Литеральная форма создания объекта counter
{
    let counter = {
        count: 0,
        increaseCount() {
            this.count++;
            return this.count;
        },
        getCount() {
            return this.count;
        }
    }

    console.log('Литеральная форма создания объекта:')
    console.log(counter.getCount());
    console.log(counter.increaseCount());
    console.log(counter.getCount());
}

// Создание объекта с помощью функции конструктора
{
    function Counter() {
        this.count = 0;
        this.increaseCount = function() {
            this.count++;
            return this.count;
        };
        this.getCount = function() {
            return this.count;
        }
    }

    let counter = new Counter();
    console.log('-------------------');
    console.log('Создание объекта с помощью функции конструктора:');
    console.log(counter.getCount());
    console.log(counter.increaseCount());
    console.log(counter.getCount());
}

// Создание объекта с помощью класса
{
    class Counter {
        constructor() {
            this.count = 0;
        }

        increaseCount() {
            this.count++;
            return this.count;
        };

        getCount() {
            return this.count;
        }
    }

    let counter = new Counter();
    console.log('-------------------');
    console.log('Создание объекта с помощью класса:');
    console.log(counter.getCount());
    console.log(counter.increaseCount());
    console.log(counter.getCount());
}

// Создание объекта с помощью Object.create
{
    const counter = Object.create({},{
        count: {
            writable: true,
            value: 1},
    })

    console.log('-------------------');
    console.log('Создание объекта с помощью Object.create:')
    console.log(counter.count);
}


// Создание объекта с помощью Object.assign
{
    let counter = Object.assign({}, {
        count: 0,
        increaseCount() {
            this.count++;
            return this.count;
        },
        getCount() {
            return this.count;
        }
    })

    console.log('-------------------');
    console.log('Создание объекта с помощью Object.assign:')
    console.log(counter.getCount());
    console.log(counter.increaseCount());
    console.log(counter.getCount());
}


// Задание 2 – Скопировать объект counter всеми возможными способами;
// Копирование объекта с помощью Object.assign
{
    let counter = {
        count: 0,
        increaseCount() {
            this.count++;
            return this.count;
        },
        getCount() {
            return this.count;
        }
    }

    let newCounter = Object.assign({}, counter);
    console.log('-------------------');
    console.log('Копирование объекта с помощью Object.assign:')
    console.log(newCounter)
    console.log(counter === newCounter);
}

// Копирование объекта с помощью object spread()
{
    let counter = {
        count: 0,
        increaseCount() {
            this.count++;
            return this.count;
        },
        getCount() {
            return this.count;
        }
    }

    let newCounter = {...counter};
    console.log('-------------------');
    console.log('Копирование объекта с помощью object spread():')
    console.log(newCounter);
    console.log(counter === newCounter);
}

// Копирование объекта с помощью JSON.stringify() и JSON.parse() 
// Методы будут опущены т.к функции не сериализуемы
{
    let counter = {
        count: 1,
        increaseCount() {
            this.count++;
            return this.count;
        },
        getCount() {
            return this.count;
        }
    }

    let newCounter = JSON.parse(JSON.stringify(counter));
    console.log('-------------------');
    console.log('Копирование объекта с помощью Object.assign:')
    console.log(newCounter);
    console.log(counter === newCounter);
}

// Копирование объекта с помощью lodash
{
    let counter = {
        count: 0,
        increaseCount() {
            this.count++;
            return this.count;
        },
        getCount() {
            return this.count;
        }
    }

    let newCounter = cloneDeep(counter);
    console.log('-------------------');
    console.log('Копирование объекта с помощью lodash:')
    console.log(newCounter)
    console.log(counter === newCounter);
}

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
// function declaration
{
    function makeCounter() {
        let count = 0;
        return function() {
            return count++;
        };
    }

    const counter = makeCounter();
    console.log('-------------------');
    console.log('function declaration:')
    console.log(counter());
    console.log(counter());
}

// function expression
{
    const makeCounter = function() {
        let count = 0;
        return function() {
            return count++;
        };
    }

    const counter = makeCounter();
    console.log('-------------------');
    console.log('function expression:')
    console.log(counter());
    console.log(counter());
}

// arrow function
{
    const makeCounter = () => {
        let count = 0;
        return () => count++;
    };

    const counter = makeCounter();
    console.log('-------------------');
    console.log('arrow function:')
    console.log(counter());
    console.log(counter());
    console.log(counter());
}

// named function expressions
{
    const makeCounter = function makeCounterInnerRef() {
        let count = 0;
        return function() {
            return count++;
        };
    }

    const counter = makeCounter();
    console.log('-------------------');
    console.log('named function expressions:')
    console.log(counter());
    console.log(counter());
}

// Бонус Задание 1 – Написать функцию глубокого сравнения двух объектов:
const deepEqual = (a, b) => {
    if (a === b) {
      return true;
    }
    if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
      return false;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (let i = 0; i < aKeys.length; i += 1) {
      const key = aKeys[i];
      if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
};

const first = {a: 3, b: 123, c: {d: 123}};   
const second = { b: 123, c: {d: 123}, a: 3}; 
console.log('-------------------');
console.log('Deep equal:')
console.log(deepEqual(first, second));
const obj1 = { 
    here: { 
        is: "on", 
        other: "3" 
    }, 
    object: 'Z'
};
const obj2 = {
    here: { 
        is: "on", 
        other: "2"
    }, 
    object: 'Z' 
};
console.log('Deep equal:')
console.log(deepEqual(obj1, obj2));

// Бонус Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:
const reverseStr = (str) => str.split("").reverse().join('');
console.log('-------------------');
console.log('Reverse string:')
console.log(reverseStr('abcdef'));