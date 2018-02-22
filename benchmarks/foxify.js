'use strict'

const Foxify = require('foxify')

const app = new Foxify()

app.get('/', (req, res) => {
  res.json({hello: 'world'})
})

app.start()
