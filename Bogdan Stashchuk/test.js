document.addEventListener("DOMContentLoaded", function () {

    const person = {
        age: 28,
        name: 'Bogdan'
    }

    function increseAte(person) {
        person.age = person.age + 1;
        return person;
    }

    console.log(person);
    console.log(increseAte(person));
})
