#!/usr/bin/env babel-node
require('./helper')
const fs = require('fs')
// const path = require('path')

const argv = process.argv
const filename = argv[2]

async function cat() {
  const content = await fs.promise.readFile(filename, 'utf8')
  console.log(content)
}

cat()
