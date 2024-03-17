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

    // 7.0 Деструктуризация объекта (Саша обучал вспомнить)
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
    // 7.1 Деструктуризация массива (Саша обучал вспомнить)
    function destructuringArray() {
        const fruits = ['Apple', 'Banana'];
        const [fruitOne, fruitTwo] = fruits;

        console.log(fruitOne);
        console.log(fruitTwo);
    }


})
