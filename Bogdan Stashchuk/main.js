document.addEventListener("DOMContentLoaded", function () {
    // 1 Сортировка
    function sortArray() {
        const myArray = [333, 22, 33, 123, 5, 6, 7, 8];
        myArray.sort((a, b) => a - b);

        console.log(myArray);
    }

    // 2 Добавить в начало массива
    function unshiftArray(a) {
        const myArray = [1, 2, 3];
        myArray.unshift(a);
        console.log(myArray);
        return myArray;
    }

    // 3 Добавить в конец массива
    function pushArray(a) {
        const myArray = [1, 2, 3];
        myArray.push(a);
        console.log(myArray);
        return myArray;
    }

    // 4 Удалить первый элемент в начале массива
    function shiftArray() {
        const myArray = [1, 2, 3];
        myArray.shift();
        console.log(myArray);
    }

    // 5 Умножить элементы массива в X раз (push)
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
