#!/usr/bin/env babel-node
require('./helper')

const fs = require('fs')
const path = require('path')

const argv = process.argv

const dir = argv[2]

async function mkdirImpl(parts) {
  let curPath = ''
  // parts.reduce() ??? Promise.reduce(parts, ...) ???
  for (let i = 0; i < parts.length; i++) {
    curPath = path.join(curPath, parts[i])
    await fs.promise.access(curPath, fs.constants.F_OK).then((d) => {
      if (i === parts.length - 1) {
        console.log('Cannot create directory \'' + curPath + '\': File exists')
      }
    }, (e) => {      
      fs.promise.mkdir(curPath)
    })
  }
}

async function mkdir(d) {
  const parts = d.split('/')
  mkdirImpl(parts)
}

mkdir(dir)
