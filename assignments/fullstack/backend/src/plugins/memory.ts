import fp from 'fastify-plugin';
import * as cuid from 'cuid';

export interface MemoryPluginOptions {
	// Specify Memory plugin options here
}

interface Message {
	id: string;
	timestamp: number;
	sender: string;
	message: string;
}

type AddMessageArgs = Pick<Message, 'sender' | 'message'>;

// use a Map as POC to save messages in memory and initialize with 1 bot intro message
const mem: Map<string, Message> = new Map();
const introMessageId = cuid();
const introMessage: Message = {
	id: introMessageId,
	timestamp: new Date().valueOf(),
	sender: 'bot',
	message: 'Hi, I\'m echobot 🤖 Send me any message & I\'ll reply it back to you.',
};
mem.set(introMessageId, introMessage);

export default fp<MemoryPluginOptions>(async (fastify, opts) => {
	fastify.decorate('addMessage', function (args: AddMessageArgs) {
		fastify.log.debug({ args }, 'addMessage');
		const id = cuid();
		const timestamp = new Date().valueOf();
		const newMsg = { ...args, id, timestamp };
		mem.set(id, newMsg);
		return newMsg;
	});
	fastify.decorate('getMessages', function () {
		return Array.from(mem.values());
	});
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
	export interface FastifyInstance {
		addMessage (msg: AddMessageArgs): Message;
		getMessages (): Message[];
	}
}
