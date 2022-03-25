import { extname } from 'path'
import { builtinModules as builtin } from 'module'

// --experimental-loader

export async function resolve(specifier, context, defaultResolve) {
  if (!builtin.includes(specifier) && extname(specifier) !== '.js') {
    specifier = specifier + '.js'
  }
  return defaultResolve(specifier, context, defaultResolve)
}
