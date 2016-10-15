#!/usr/bin/env babel-node
require('./helper')
const fs = require('fs')

const argv = process.argv
const filename = argv[2]

async function touch() {
  const stat = await fs.promise.stat(filename)
  if (stat.isFile()) {
    const fd = await fs.promise.open(filename, 'r')
    const date = new Date()
    fs.promise.futimes(fd, stat.atime, date).then(() => {
      fs.promise.close(fd)
      console.log('closed')
    })
  }
}

touch()