document.addEventListener("DOMContentLoaded", function () {

    const personOne = {
        age: 28,
        name: 'Bogdan'
    }

    function increseAte(person) {
        person.age = person.age + 1;
        return person;
    }

    console.log(personOne);
    console.log(increseAte(personOne));
})
