'use strict'

const fp = require('fastify-plugin')
const validator = require('simple-body-validator')

function fastifyValidator(fastify, _options, next) {
	fastify.decorateRequest('validator', { getter: () => validator })
	fastify.decorate('validator', { getter: () => validator })
	next()
}

module.exports = fp(fastifyValidator, {
	fastify: '4.x',
	name: 'fastify-validator',
})
