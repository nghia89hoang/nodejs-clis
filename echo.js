#!/usr/bin/env babel-node
require('./helper')

const str = process.argv[2] || '\n'
const n = process.argv[3] === '-n'

async function echo() {
  if (str) {
    if (n) {
      process.stdout.write(str)
    } else {
      process.stdout.write(str + '\n')
    }
  }
}

echo()
