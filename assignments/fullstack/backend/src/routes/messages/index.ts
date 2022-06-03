import { FastifyPluginAsync } from 'fastify';
import { Static, Type } from '@sinclair/typebox';

const AddMessageRequestBodySchema = Type.Required(
	Type.Object({
		message: Type.String(),
	}, {
		additionalProperties: false,
	}),
);

type AddMessageRequestBodyType = Static<typeof AddMessageRequestBodySchema>;

const GetMessageResponseBodySchema = Type.Required(
	Type.Object({
		message: Type.String(),
	}, {
		additionalProperties: false,
	}),
);

type GetMessageResponseBodyType = Static<typeof GetMessageResponseBodySchema>;

const message: FastifyPluginAsync = async (app, opts): Promise<void> => {
	app.get(
		'/',
		async function (request, reply) {
			return { messages: app.getMessages() };
		},
	);
	app.post<{ Body: AddMessageRequestBodyType; Reply: GetMessageResponseBodyType }>(
		'/', {
			schema: { body: AddMessageRequestBodySchema },
		},
		async function (request, reply) {
			const { message: originalMsg } = request.body;
			app.addMessage({ message: originalMsg, sender: 'user' });
			return app.addMessage({ message: originalMsg, sender: 'bot' });
		},
	);
};

export default message;
