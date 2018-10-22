"use strict"

const app = require('fastify')()

app.use(require("cors")());
app.use(require("dns-prefetch-control")());
app.use(require("frameguard")());
app.use(require("hide-powered-by")());
app.use(require("hsts")());
app.use(require("ienoopen")());
app.use(require("x-xss-protection")());

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

app.get('/', schema, (req, reply) => {
  reply.send({hello: 'world'})
})

app.listen(3000)