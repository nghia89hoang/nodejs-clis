#!/usr/bin/env babel-node
require('./helper')

const fs = require('fs')
const readLine = require('readline')

const argv = process.argv
const searchFor = argv[2]
const searchPath = argv[3]

async function grep(param, fileName) {
  const rl = readLine.createInterface({
    input: fs.createReadStream(fileName)
  })
  const results = []
  const lineCallback = (line) => {
    const a = (l, r) => {
      if (l.indexOf(param) !== -1) {
        results.push(l)
      }
    }
    return a(line, results)
  }
  rl.on('line', lineCallback)
  await rl.promise.on('close')
  return results
}
async function main() {
  (await grep(searchFor, searchPath)).forEach((item) => console.log(item))
}

main()
