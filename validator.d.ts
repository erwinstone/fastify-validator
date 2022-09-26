import { FastifyPluginCallback } from 'fastify'
import * as validator from 'simple-body-validator'

declare const fastifyValidator: FastifyPluginCallback

export default fastifyValidator

declare module 'fastify' {
	interface FastifyRequest {
		validator: typeof validator
	}
	interface FastifyInstance {
		validator: typeof validator
	}
}
