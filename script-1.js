let person = {
    id: 1,
    name: 'Odil',
    age: 78,
    child: {
        id: 1,
        name: 'Ali',
        age: 48,
        child: {
            id: 1,
            name: 'Umar',
            age: 20
        }

    }

}

let sum = 0;

while (true) {
    if (person) {
        sum += person.age
        // console.log(person.age);
    } else {
        break
    }

    person = person.child


}
console.log(sum);

