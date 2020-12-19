let data = require('fs').readFileSync('./Day1/data.txt', 'utf8').split("\r\n").map(x => parseInt(x))
data.map(a => data.map(b => a + b == 2020 ? console.log("Day1 part1:" + (a * b)) : 0)) //.filter(x => x != 0) //.reduce((that, those) => [].concat(that, those))
data.map(a => data.map(b => data.map(c => a + b + c == 2020 ? console.log("Day1 part1:" + (a * b * c)) : 0))) //.filter(x => x != 0) //.reduce((that, those) => [].concat(that, those))

