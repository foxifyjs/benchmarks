"use strict"

const { dependencies } = require("../package")

const packages = {
  "bare": { version: process.version },
  "connect-router": { extra: true, package: "router", hasRouter: true },
  "connect": {},
  "express-route-prefix": { extra: true, package: "express", hasRouter: true },
  "express-with-middlewares": { extra: true, package: "express", hasRouter: true },
  "express": { hasRouter: true },
  "fastify": { hasRouter: true },
  "fastify-with-middlewares": { extra: true, package: "fastify", hasRouter: true },
  "foxify": { checked: true, hasRouter: true },
  "foxify-with-middlewares": { extra: true, package: "foxify", hasRouter: true },
  "hapi": { hasRouter: true },
  "koa-router": { extra: true, hasRouter: true },
  "koa": {},
  "micro-router": { extra: true, hasRouter: true },
  "micro": { extra: true },
  "polka": { hasRouter: true },
  "rayo": { hasRouter: true },
  "restify": { hasRouter: true },
  "take-five": { hasRouter: true },
  "total.js": { hasRouter: true },
  "trek-engine-router": { extra: true, hasRouter: true },
  "trek-engine": { extra: true },
}

let choices = []
Object.keys(packages).forEach((pkg) => {
  if (!packages[pkg].version) {
    const version = dependencies[pkg] || dependencies[packages[pkg].package] || ""
    packages[pkg].version = version.replace("^", "")
  }
  choices.push(pkg)
})

module.exports = {
  choices: choices.sort(),

  list: (extra = false) => {
    return choices.map((c) => {
      return extra === !!packages[c].extra ? Object.assign({}, packages[c], { name: c }) : null
    }).filter(c => c)
  },

  info: (module) => {
    return packages[module]
  }
}
