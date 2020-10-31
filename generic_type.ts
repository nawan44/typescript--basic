const book = {
    title: 'This Book',
    author: 'nawan44',
    year: '2020'
}

const room = {
    bed: true,
    toilet: true,
    ac: false,
}

function save<T, K>(item: T, iitem2: K): T {
    return item
}

const item = save(book, room)

console.log(item.author) //nawan44
console.log(item.title) //This Book