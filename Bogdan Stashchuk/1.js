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
            age: 17
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
        const filteredUsers = {};

        for (let key in users) {
            if (users[key].age > 18) {
                filteredUsers[key] = users[key];
                console.log(filteredUsers[key]);
            }
        }
    }

    getUsersNames(users);
});
