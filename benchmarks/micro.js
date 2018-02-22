'use strict'

const micro = require('micro')

const server = micro(async (req, res) => ({hello: 'world'}))

server.listen(3000)
