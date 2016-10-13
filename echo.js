#!/usr/bin/env node
require('./helper')

const n = process.argv[2] === '-n'
const str = n ? process.argv[3] : process.argv[2]

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
