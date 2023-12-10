import * as  fs from "fs"

const text = fs.readFileSync("./input.txt", "utf-8")

const sum = text.split("\n").reduce((sum, line) => {
  const nums = line.replace(/[^0-9]/g, ""),
    num = nums.slice(0, 1) + nums.slice(-1)
  console.log(`${line}:${num}`)
  return sum + parseInt(num)
}, 0)

console.log(sum)

