#!/usr/bin/env node
import { join } from 'path'
import { sync } from 'cross-spawn'

const options = process.argv.slice(2)

const loader = join(import.meta.url, '..', './loader.mjs')

const cp = sync('node', ['--loader', loader, ...options], { stdio: 'inherit' })

process.exit(cp.status)


