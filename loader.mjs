import { extname } from 'path'

// --experimental-loader

export async function resolve(specifier, context, defaultResolve) {

  // start with / ./ ../
  if (/^[\/\.]/.test(specifier) && extname(specifier) !== '.js') {
    specifier = specifier + '.js'
  }
  return defaultResolve(specifier, context, defaultResolve)
}
