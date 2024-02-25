document.addEventListener("DOMContentLoaded", function () {
    const users = {
        id_1: {
            name: 'Bogdan',
            city: 'Rostov',
            info: {
                isPopular: true,
                country: 'Russia'
            },
            age: 28
        },
        id_2: {
            name: 'Artem',
            city: 'Rostov',
            info: {
                isPopular: true,
                country: 'Russia'
            },
            age: 27
        },
        id_3: {
            name: 'Alex',
            city: 'Stambul',
            info: {
                isPopular: true,
                country: 'Turkey'
            },
            age: 26
        }
    };

    function getUsersNames(users) {
        for (let key in users) {
            users[key].age *= 2;
            console.log(users[key]);
        }
    }
    getUsersNames(users);
});
