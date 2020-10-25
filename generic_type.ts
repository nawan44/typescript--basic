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

function save<T>(item: T): T {
    return item
}

const item = save(book)

console.log(item.author) //nawan44
console.log(item.title) //This Book