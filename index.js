const stack = require('secret-stack')
const shuffle = require('lodash.shuffle')
const debug = require('debug')('flotilla')

const plugins = [
  require('ssb-db'),
  require('ssb-replicate'),
  [
    require('ssb-about'),
    require('ssb-backlinks'),
    require('ssb-blobs'),
    require('ssb-conn'),
    require('ssb-ebt'),
    require('ssb-friends'),
    require('ssb-invite'),
    require('ssb-lan'),
    require('ssb-links'),
    require('ssb-logging'),
    require('ssb-master'),
    require('ssb-no-auth'),
    require('ssb-onion'),
    require('ssb-ooo'),
    require('ssb-plugins'),
    require('ssb-query'),
    require('ssb-tangle'),
    require('ssb-unix-socket'),
    require('ssb-ws')
  ]
]

module.exports = (config = {}) => {
  const server = stack(config)

  // TODO: Move this out of the main function.
  // NOTE: This will probably break if you add nested arrays. 
  //       Implementing this recursively might have been very silly.
  const walk = (input) => {
    if (Array.isArray(input)) {
      shuffle(input).forEach(walk)
    } else {
      debug(input.name)
      server.use(input)
    }
  }

  // Don't shuffle original array.
  plugins.forEach(walk)

  return server
}
