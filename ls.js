#!/usr/bin/env babel-node
require('./helper')
const fs = require('fs')
const path = require('path')

const argv = process.argv

// recursive Option
const r = argv.indexOf('-R')
const dir = r !== 2 ? argv[2] || __dirname : __dirname

const isOptionOn = (option) => option !== -1

async function lsImpl(nextPath, upDir = '') {
  const filenames = await fs.promise.readdir(nextPath)
  const filePromises = []
  for (const name of filenames) {
    const childPath = path.join(nextPath, name)
    const stat = await fs.promise.stat(childPath)
    filePromises.push(path.join(upDir, name))
    if (stat.isDirectory() && isOptionOn(r)) {
      filePromises.push(lsImpl(childPath, path.join(upDir, name)))
    }
  }
  return Promise.all(filePromises)
}
const flatten = (arr) => {
  const result = []
  for (const i of arr) {
    if (Object.prototype.toString.call(i) === '[object Array]') {
      result.push(...flatten(i))
    } else {
      result.push(i)
    }
  }
  return result
}
async function ls() {
  flatten(await lsImpl(dir)).forEach((item) => {
    console.log(item)
  })
}

ls()
