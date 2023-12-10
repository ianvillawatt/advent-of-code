import * as  fs from "fs"

//const text = fs.readFileSync("./input.txt", "utf-8")

const text = `ttmtqrh3four4oneightrkv`

const textNumbers = [
 "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 
]

const numberNumbers = Array(10).fill(0).map((_, i) => i)

const pattern = textNumbers.concat(numberNumbers).join("|")

const sum = text.split("\n").reduce((sum, line) => {
  // TODO oneight
  const matches = Array.from(line.matchAll(pattern)),
    first = matches[0][0],
    last = matches.at(-1)[0],
    numeric = [first, last].map((textNum) => {
      return textNumbers.includes(textNum)  ? (textNumbers.indexOf(textNum) + 1).toString(): textNum
    }).join("")

  console.log({ line, first, last, numeric })
  return sum + parseInt(numeric)
}, 0)

console.log(sum)

