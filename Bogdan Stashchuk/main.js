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

    // 3 Удалить первый элементм в начало массива
    function shiftArray() {
        const myArray = [1, 2, 3];
        myArray.shift();
        console.log(myArray);
    }

})
