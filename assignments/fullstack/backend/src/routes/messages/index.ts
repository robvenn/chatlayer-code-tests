import { FastifyPluginAsync } from 'fastify';
import { Static, Type } from '@sinclair/typebox';

const MessagePostBody = Type.Required(
	Type.Object({
		message: Type.String(),
	}, {
		additionalProperties: false,
	}),
);

type MessagePostBodyType = Static<typeof MessagePostBody>;

const message: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	fastify.post<{ Body: MessagePostBodyType; Reply: MessagePostBodyType }>(
		'/', {
			schema: { body: MessagePostBody },
		},
		async function (request, reply) {
			// const { message } = request.body;
			return request.body;
		},
	);
};

export default message;
