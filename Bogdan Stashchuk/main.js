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

})
