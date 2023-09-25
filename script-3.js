let arr = [
    { id: 1, name: 'Fozil' },
    { id: 2, name: 'Odil' },
    { id: 3, name: 'Alibek' },
    { id: 4, name: 'Elyor' },
]


function onSearch(text) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.includes(text.toLowerCase()) || (arr[i].name.includes(text.toUpperCase()))) {
            newArr.push(arr[i])
        }
    }

    console.log(newArr);
}

onSearch('e');

