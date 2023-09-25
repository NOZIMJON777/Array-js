let person = {
    id: 1,
    name: 'Umar',
    surname: 'Ismoilov',
    ielts: 5.5,
    student: true,
    password: 101
}
function register(name, password) {

    if (name === person.name && password === person.password) {
        console.log('wellcome');
    } else {
        console.log('wrong name or password ');
    }



    // if (input === person.name && input === person.password) {
    //     console.log('welcome');
    // } else if (person.password === 101) {
    //     console.log('welcome ');
    // } else {
    //     console.log('wrong password or name');
    // }


}

register('Umar', 101)


// register(person)





