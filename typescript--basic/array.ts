let cities: string[]

cities = ['Jakarta', 'Bogor', 'Tangerang']

cities[1] = 'Medan'

cities.push('Surabaya')

console.log(cities) //Jakarta, Medan, Bogor, Tangerang, Suarabaya

const prime: number[] = [1, 2, 3, 4, 5, 6, 7]

console.log(prime[2])  //3

const answer: boolean[] = [true, false, true, true]

console.log(answers[2]) // true

const scores: Array<string | number> = ['A', 100, 80, 'AB']

console.log(scores[1]) // 100
console.log(scores[3]) // AB