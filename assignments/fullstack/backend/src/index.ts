// Read the .env file.
import * as dotenv from 'dotenv';
dotenv.config();

// Require the framework
import Fastify from 'fastify';

// Require library to exit fastify process, gracefully (if possible)
import * as closeWithGrace from 'close-with-grace';

// Instantiate Fastify with some config
const server = Fastify({
	logger: true,
	ajv: {
		customOptions: {
			coerceTypes: false,
		},
	},
});

// Register your application as a normal plugin.
server.register(import('./app'));

// delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace({ delay: 500 }, async function ({ signal, err, manual }) {
	if (err) {
		server.log.error(err);
	}
	await server.close();
} as closeWithGrace.CloseWithGraceAsyncCallback);

server.addHook('onClose', async (instance, done) => {
	closeListeners.uninstall();
	done();
});

// Start listening.
server.listen(process.env.PORT || 3000, (err: any) => {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}
});
