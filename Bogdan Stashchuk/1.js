document.addEventListener("DOMContentLoaded", function () {
    const users = {
        Saverzus: {
            name: 'Bogdan',
            surname: 'Trofimenko',
            age: 28
        },
        Zendro: {
            name: 'Daniil',
            surname: 'Serov',
            age: 25
        },
        ArtemDj: {
            name: 'Artem',
            surname: 'Kurbatov',
            age: 27
        }
    };

    for (let user in users) {
        users[user].age++;
    }

    console.log(users);
});
