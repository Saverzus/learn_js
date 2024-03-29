document.addEventListener("DOMContentLoaded", function () {
    // 1 Сортировка (МЕТОД МАССИВА sort)
    function sortArray() {
        const myArray = [333, 22, 33, 123, 5, 6, 7, 8];
        myArray.sort((a, b) => a - b);

        console.log(myArray);
    }

    // 2 Добавить в начало массива (МЕТОД МАССИВА unshift)
    function unshiftArray(a) {
        const myArray = [1, 2, 3];
        myArray.unshift(a);
        console.log(myArray);
        return myArray;
    }

    // 3 Добавить в конец массива (МЕТОД МАССИВА push)
    function pushArray(a) {
        const myArray = [1, 2, 3];
        myArray.push(a);
        console.log(myArray);
        return myArray;
    }

    // 4 Удалить первый элемент в начале массива (МЕТОД МАССИВА shift)
    function shiftArray() {
        const myArray = [1, 2, 3];
        myArray.shift();
        console.log(myArray);
    }

    // 5 Умножить элементы массива в X раз (МЕТОД МАССИВА push и forEach)
    function miltuplyArray(a) {
        const myArray = [1, 2, 3, 4, 5];
        const myArrayMultipled = [];

        myArray.forEach(el => {
            myArrayMultipled.push(el * a);
        });

        console.log(myArray);
        console.log(myArrayMultipled);
    }

    // 6 Умножить элементы массива в X раз (МЕТОД МАССИВА map) (создаёт новый массив)
    function modifyPrice(a) {
        const priceArray = [200, 100, 300, 1200];

        const newPriceArray = priceArray.map(e => {
            return e * a;
        });

        return newPriceArray;
    }

    // 7.0 Деструктуризация объекта
    function destructuringObj() {
        const userProfile = {
            name: 'Bogdan',
            age: 28,
            city: 'Rostov'
        }

        const { name, age } = userProfile;
        const { city } = userProfile;

        console.log(name);
        console.log(city);
    }
    // 7.1 Деструктуризация массива
    function destructuringArray() {
        const fruits = ['Apple', 'Banana'];
        const [fruitOne, fruitTwo] = fruits;

        console.log(fruitOne);
        console.log(fruitTwo);
    }

    // 8. Деструктуризация в функциях (Получить количество постов пользователя)
    function getUserPosts() {
        const userProfile = {
            id: 1,
            name: 'Bogdan',
            age: 28,
            postsQuantity: 20
        };

        const userPostInfo = ({ name, postsQuantity }) => {
            if (!postsQuantity) {
                return `User ${name} has no posts`;
            }
            return `User ${name} has ${postsQuantity} posts`;
        }

        return userPostInfo(userProfile);
    }

    // 9. Только положительные числа и только числа (Условия)
    const sumPositiveNumbers = (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return 'Thats numbers is not valid (maybe u use a text or sumeting else';
        }
        if (a <= 0 || b <= 0) {
            return 'Thats numbers is not positive';
        }

        return a + b;
    }

    // 10. Является ли текущий месяц зимним (switch)
    const checkWinterMonth = (month) => {
        switch (month) {
            case 12:
                console.log('December');
                break;
            case 1:
                console.log('January');
                break;
            case 2:
                console.log('February');
                break;
            default:
                console.log('Thats not a winter month');
        }
    }

    // 11. Проверка на совершенолетие (тернарный оператор)
    const checkAge = (year) => {
        year >= 18 ? console.log('Liquid age') : console.log('Not liquid age');
        return year;
    }

    // 12. Пройтись циклом forEach по массиву
    function arrayForEach() {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        array.forEach((element, id) => {
            console.log(element, id);
        })
    }

    // 13. Пройтись циклом по объекту и получить свойства и значения объекта (key in obj)
    function keysFromObject() {
        users = {
            id: 1,
            name: 'Bogdan',
            age: 28
        }

        for (const key in users) {
            console.log(key, users[key]);
        }
    }

    // 14. Пройтись циклом по объекту через forEach
    function forEachObject() {
        users = {
            id: 1,
            name: 'Bogdan',
            age: 28
        }

        Object.keys(users).forEach(key => {
            console.log(key, users[key])
        })
    }

    // 15. Получить значения из объекта (keys или values) через forEach вызывать так getValuesOrKeysFromObject('keys'); или так getValuesOrKeysFromObject('values');
    function getValuesOrKeysFromObject(action) {
        const obj = {
            id: 1,
            name: 'Bogdan',
            age: '28'
        };

        function keysOrValues(arg, obj) {
            return arg === 'keys' ? Object.keys(obj) : Object.values(obj);
        }

        console.log(keysOrValues(action, obj));
    }

    // 16. Пример с callBack функцией (она должна быть выполнена после завершения работы другой функции.)
    function callBackExample() {
        const makePizza = function (title, callBackFunction) {
            console.log(`${title} готовится`);
            setTimeout(callBackFunction, 5000);
        }

        const readBook = () => {
            console.log('Читаю книгу');
        }

        const eatPizza = function () {
            console.log('Кушац');
        }
        makePizza('4 сыра пицца', eatPizza);
        readBook();
    }

    // 17. for in пример (пройтись циклом по массиву) (так лучше не делать и лучше через forEach делать)
    function forInExample() {
        const myArray = [true, 10, 'abc', null];

        for (const key in myArray) {
            console.log(myArray[key]);
        }
    }

    // 18. for of пример (то есть через of можно перебирать любое значение (символы строки например, или элементы массива)) (так-же лучше через foEach делать) (так-же for of не для объектов)
    function forOfExample() {
        const name = 'Bogdan';
        const array = [1, 2, 3, 4, 5];

        for (const letter of name) {
            console.log(letter);
        }

        for (const element of array) {
            console.log(element);
        }
    }

    // 19. Импортирование
    // Например есть файл moduleOne.mjs
    // const one = 1;
    // const two = 'two';

    // export {
    //     one,
    //     two
    // }

    // // И можно даже с другим именем импортировать в файл moduleTwo.mjs
    // import {
    //     one as oneRenaimed,
    //     two
    // } from './moduleOne.js'

    // console.log(oneRenaimed);
    // console.log(two)


    // 20. Классы. Класс и вызвать метод класса
    function classExample() {
        class Comment {
            constructor(text) {
                this.text = text;
                this.votesQty = 0;
            }

            upvote() {
                this.votesQty += 1;
            }
        }

        const firstComment = new Comment('First Comment');

        firstComment.upvote();
        console.log(firstComment.votesQty);
    }

    // 21. метод reduce. Сложение чисел в массиве
    function sumNumsArray() {
        const myArray = [10, 2, 12];

        const sum = myArray.reduce((acc, val) => {
            return acc + val;
        })
        console.log(sum);
    }

    // 22. выбрать чётные (Решение 1), вычислить их квадраты и отобрать из них числа больше 50. getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    function getEvenNumbers(array) {

        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                // console.log(`Число четное ${array[i]}`);

                const even = array[i] * array[i];
                if (even >= 50) {
                    console.log(even);
                }
            }
        }
    }

    // 22. выбрать чётные (Решение 2), вычислить их квадраты и отобрать из них числа больше 50. getEvenNumbers2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    function getEvenNumbers2(array) {

        function filterEven(num) {
            return num % 2 === 0
        }

        function square(num) {
            return num * num
        }

        function filterGreaterThanFifty(num) {
            return num > 50
        }

        const result = array
            .filter(filterEven)
            .map(square)
            .filter(filterGreaterThanFifty)

        console.log(result)
    }

    // 23. Пройтись циклом по строке и получить нужное значение, убрав ненужные findName('Bogdan');
    function findName(targetName) {
        const name = 'asdqwedaBoaasdoadsasdgqweqdasdasazxczxcn123213eqwqwfdatrghhb';
        let result = '';
        let target = targetName;
        for (let char of name) {
            result = result + char;
            if (target.toLowerCase().includes(result.toLowerCase())) {
                result = target;
                break;
            }
        }
        console.log(result);
    }

    // 24. Создание промиса просто пример
    function promiseExample() {
        const myPromise = new Promise((resolve, reject) => {
            // тут выполняются асинхронные действия
            // Внутри этой функции нужно в результате вызвать одну из функций resolve или reject
        });

        // Получение результата промиса
        myPromise
            .then(value => {
                // Действие в случае успешного исполнения Промиса
                // Значение value - это значение, переданное в вызове функции resolve внутри Промиса
            })
            .catch(error => {
                // Действия в случае отклонения промиса
                // Значение error - это значение, переданное в вызове функции reject внутри промиса
            });
    }

    // 25. Получение данных с помощью FETCH API
    // тут 2 раза then, т.к. fetch возвращает промис и json возвращает промис
    function simpleFetch() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(json => console.log(json))
            .catch(error => console.error(error))
    }

    // 26. Лучше так делать запрос по API, т.к. тут только 1 промис будет
    function getDataExample() {
        const getData = (url) => {
            return new Promise((resolve, reject) => {
                fetch(url)
                    .then(response => response.json())
                    .then(json => resolve(json))
                    .catch(error => reject(error))
            })
        }

        getData('https://jsonplaceholder.typicode.com/todos')
            .then(data => console.log(data))
            .catch(error => console.log(error.message))
    }

























})

