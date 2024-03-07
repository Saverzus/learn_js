document.addEventListener("DOMContentLoaded", function () {

    const person = {
        name: 'Bogdan',
        age: 28
    }

    function renameUser(personName) {
        const newPerson = Object.assign({}, person);
        newPerson.name = 'Daniel';
        return newPerson;
    }

    const updatePeron = renameUser(person);
    console.log(person);

    console.log(updatePeron);
})
