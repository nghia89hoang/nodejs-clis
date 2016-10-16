#!/usr/bin/env babel-node
require('./helper')

const fs = require('fs')
// const path = require('path')

const argv = process.argv
const targetFile = argv[2]
const symbolLink = argv[3]

async function ln(target, symlink) {
  await fs.promise.symlink(target, symlink)
}

ln(targetFile, symbolLink)
