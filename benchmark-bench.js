#!/usr/bin/env node

'use strict'

const inquirer = require('inquirer')
const bench = require('./lib/bench')

function select (callback) {
  inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Select packages',
      name: 'list',
      choices: [
        new inquirer.Separator(' = The usual ='),
        {
          name: 'foxify',
          checked: true
        },
        {
          name: 'fastify'
        },
        {
          name: 'express'
        },
        {
          name: 'koa'
        },
        {
          name: 'hapi'
        },
        {
          name: 'connect'
        },
        {
          name: 'restify'
        },
        {
          name: 'take-five'
        },
        {
          name: 'total.js'
        },
        new inquirer.Separator(' = The extras = '),
        {
          name: 'connect-router'
        },
        {
          name: 'express-route-prefix'
        },
        {
          name: 'koa-router'
        },
        {
          name: 'micro'
        },
        {
          name: 'micro-router'
        },
        {
          name: 'trek-engine'
        },
        {
          name: 'trek-engine-router'
        }
      ],
      validate: function (answer) {
        if (answer.length < 1) return 'You must choose at least one package.'

        return true
      }
    }
  ])
  .then(function (answers) {
    callback(answers.list)
  })
}

inquirer.prompt([
  {
    type: 'confirm',
    name: 'all',
    message: 'Do you want to run all benchmark tests?',
    default: false
  },
  {
    type: 'input',
    name: 'connections',
    message: 'How many connections you need?',
    default: 100,
    validate (value) {
      return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
    },
    filter: Number
  },
  {
    type: 'input',
    name: 'pipelining',
    message: 'How many pipelining you need?',
    default: 10,
    validate (value) {
      return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
    },
    filter: Number
  },
  {
    type: 'input',
    name: 'duration',
    message: 'How long does it takes?',
    default: 5,
    validate (value) {
      return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
    },
    filter: Number
  }
]).then((opts) => {
  if (!opts.all) {
    select(list => bench(opts, list))
  } else {
    bench(opts, [
      'bare',
      'connect',
      'connect-router',
      'express-route-prefix',
      'express',
      'hapi',
      'koa-router',
      'koa',
      'restify',
      'take-five',
      'total.js',
      'fastify',
      'foxify',
      'micro',
      'micro-router',
      'trek-engine',
      'trek-engine-router'
    ])
  }
})
