let test =
    [
        '..##.......',
        '#...#...#..',
        '.#....#..#.',
        '..#.#...#.#',
        '.#...##..#.',
        '..#.##.....',
        '.#.#.#....#',
        '.#........#',
        '#.##...#...',
        '#...##....#',
        '.#..#...#.#'
    ]

let data = require('fs').readFileSync('./day3/data.txt', 'utf8').split("\r\n")

function ParseInput(input) {
    return input.map(row =>
        Array.from(row))
}

function walk(rowStep, colStep, input, inputHeight, inputWidth) {

    let treeCount = 0
    let j = 0
    for (let i = 0; i < inputHeight; i = i + rowStep) {
        if (j >= inputWidth)
            j = j - inputWidth

        if (input[i][j] === '#')
            treeCount++
        j = j + colStep

    }
    return treeCount

}

let testinput = ParseInput(test)
let res = walk(1, 3, testinput, 11, 11)
console.log("Day3A test, treecount= " + res)

//Part 1
let parsedData = ParseInput(data)
let res3A = walk(1, 3, parsedData, 323, 31)
console.log("Day3A, treecount= " + res3A)

//Part 2
let res3B1 = walk(1, 1, parsedData, 323, 31)
let res3B2 = walk(1, 3, parsedData, 323, 31)
let res3B3 = walk(1, 5, parsedData, 323, 31)
let res3B4 = walk(1, 7, parsedData, 323, 31)
let res3B5 = walk(2, 1, parsedData, 323, 31)


console.log("Day3B1, treecount= " + res3B1)
console.log("Day3B2, treecount= " + res3B2)
console.log("Day3B3, treecount= " + res3B3)
console.log("Day3B4, treecount= " + res3B4)
console.log("Day3B5, treecount= " + res3B5)


let tot = res3B1 * res3B2 * res3B3 * res3B4 * res3B5
console.log("Tot= " + tot)
