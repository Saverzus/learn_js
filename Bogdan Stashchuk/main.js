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

    keysFromObject();


})
