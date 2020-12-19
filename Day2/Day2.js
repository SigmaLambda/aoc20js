let pwds = ["1 - 3 a: abcde", "1 - 3 b: cdefg", "2 - 9 c: ccccccccc", "16-20 j: vjkjjcjjrjjmtnbjjjnj"]
let data = require('fs').readFileSync('./Day2/Data.txt', 'utf8').split("\r\n")

console.log(pwds)

function isPassword(s) {
    "16-20 j: vjkjjcjjrjjmtnbjjjnj"
    let rulPwd = s.split(': ')
    let min = parseInt(rulPwd[0].split('-')[0])
    let max = parseInt(rulPwd[0].split('-')[1].trim().split(" ")[0])
    let req = rulPwd[0].split('-')[1].trim().split(" ")[1]
    let pwd = rulPwd[1]

    let count = (Array.from(pwd).filter(x => x == req)).length

    return (count >= min && count <= max)

}

pwds.forEach(x => console.log(isPassword(x)))
console.log("day2 p1: " + data.map(x => isPassword(x) ? 1 : 0).reduce((a, b) => a + b, 0))

const secondCheck =
    function (s) {
        let rulPwd = s.split(': ')
        let min = parseInt(rulPwd[0].split('-')[0])
        let max = parseInt(rulPwd[0].split('-')[1].trim().split(" ")[0])
        let req = rulPwd[0].split('-')[1].trim().split(" ")[1]
        let pwd = rulPwd[1]

        return (pwd[min - 1] == req) != (pwd[max - 1] == req) ? 1 : 0
    }

const plus = function (a, b) { return a + b }
console.log("day2 p1: " + data.map(secondCheck).reduce(plus, 0))

