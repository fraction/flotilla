const stack = require('secret-stack')
const shuffle = require('lodash.shuffle')

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

  plugins.forEach((item) => {
    if (Array.isArray(item)) {
      shuffle(item).forEach((subItem) => {
        server.use(subItem)
      })
    } else {
      server.use(item)
    }
  })

  return server
}
