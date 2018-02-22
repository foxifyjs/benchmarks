'use strict'

const Hapi = require('hapi')

const server = Hapi.server({port: 3000, debug: false})

server.route({
  method: 'GET',
  path: '/',
  config: {
    cache: false,
    response: {
      ranges: false
    },
    state: {
      parse: false
    }
  },
  handler: (request, h) => ({hello: 'world'})
})

server.start()
