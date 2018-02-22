'use strict'

const micro = require('micro')
const {router, get} = require('microrouter')

const server = micro(router(get('/', async (req, res) => micro.send(res, 200, {hello: 'world'}))))

server.listen(3000)
