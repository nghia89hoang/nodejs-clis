#!/usr/bin/env babel-node
require('./helper')
require('./ls')
const fs = require('fs')
const path = require('path')

const dir = process.argv[2]

async function rm(nextPath) {
  const stat = await fs.promise.stat(nextPath)
  if (stat.isFile()) {
    await fs.promise.unlink(nextPath)
  } else {
    const subDirs = await fs.promise.readdir(nextPath)
    for (const subDir of subDirs) {
      const subPath = path.join(nextPath, subDir)
      await rm(subPath)
    }
    await fs.promise.rmdir(nextPath)
  }
}

rm(dir)
