document.addEventListener("DOMContentLoaded", function () {
    // Сортировка
    // function sortArray() {
    //     const myArray = [333, 22, 33, 123, 5, 6, 7, 8];
    //     myArray.sort((a, b) => a - b);

    //     console.log(myArray);
    // }

    // Добавить в начало массива
    function unshifting(a) {
        const myArray = [1, 2, 3];
        myArray.unshift(a);
        console.log(myArray);
        return myArray;
    }

})
