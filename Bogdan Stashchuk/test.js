document.addEventListener("DOMContentLoaded", function () {


    const user = {
        name: 'Bogdan',
        age: 17
    }

    const fnWidthError = (user) => {
        if (user.age < 18) {
            throw new Error("Пользователю меньше 18 лет");
        } else {
            throw new Error("Пользователю больше 18 лет");
        }
    }

    fnWidthError(user);






})
