const person = {
    name: 'Bogdan',
    age: 28,
    posts: {
        one: 'qwe',
        two: 'ewq'
    }
}
// const person2 = Object.assign({}, person)
// либо так
// const person2 = {...person};
// но лучше так
const person2 = JSON.parse(JSON.stringify(person))
person2.posts.one = 'qweqwe'
console.log(person2.posts.one)
console.log(person.posts.one)