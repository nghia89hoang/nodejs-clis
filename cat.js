#!/usr/bin/env babel-node
require('./helper')
const fs = require('fs')
const path = require('path')

const argv = process.argv
const filename = argv[2] && path.join(__dirname, argv[2])

// const readFileStream = path ? fs.createReadStream(path) : null
async function cat() {
  const stat = await fs.promise.stat(filename)
  if (stat.isFile()) {
    const readFileStream = fs.createReadStream(filename)
    readFileStream.pipe(process.stdout)
  }
  // fs.stat(filename, (err, stat) => {
  //   if (err) throw err
  //   if (stat.isFile()) {
  //     const readFileStream = fs.createReadStream(filename)
  //     readFileStream.pipe(process.stdout)
  //   }
  // })
}

cat()