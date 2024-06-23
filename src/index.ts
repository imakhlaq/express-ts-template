import { Server } from './server';
import { env } from './config/env';

function main() {
	// eslint-disable-next-line no-constant-binary-expression
	const port = +env.port! ?? 4000;

	const server = new Server({
		port: port
	});
	console.log('starting server');
	server.start();
}

main();
