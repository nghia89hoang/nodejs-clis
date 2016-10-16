#!/usr/bin/env/ babel-node
require('./helper')

const fs = require('fs')

const argv = process.argv
const searchFor = argv[2]
const searchPath = argv[3]

async function grep(param, fileName) {
  
}

grep(searchFor, searchPath)
