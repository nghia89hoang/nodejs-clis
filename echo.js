#!/usr/bin/env babel-node
require('./helper')

const str = process.argv[2] || '\n'
const n = process.argv[3] === '-n'

async function echo() {
  if (str) {
    process.stdout.write(str)
  }
  if (n) {
    process.stdout.write('\n')
  } else {
    process.stdout.write('\n')
  }
}

echo()
