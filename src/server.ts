import express from 'express';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import 'express-async-errors'; // <---------- apply async error patch
import cors from 'cors';

import { ONE_HUNDRED, ONE_THOUSAND, SIXTY } from './utils/constants';
import { errorHandler } from '@/middlewares/global-error-handler';
import path from 'path';
import routes from '@/routes/root-routes';

interface ServerOptions {
	port: number;
	apiPrefix?: string;
}

export class Server {
	private readonly app = express();
	private readonly port: number;

	constructor(options: ServerOptions) {
		const { port } = options;
		this.port = port;
	}

	start() {
		//* Middlewares
		this.app.use(express.json()); // parse json in request body (allow raw)
		this.app.use(express.urlencoded({ extended: true })); // allow x-www-form-urlencoded
		this.app.use(compression());
		this.app.use(express.static(path.join())); //serving static files
		this.app.use(cors()); //cors enable (you can configure it)

		//  limit repeated requests to public APIs
		this.app.use(
			rateLimit({
				max: ONE_HUNDRED,
				windowMs: SIXTY * SIXTY * ONE_THOUSAND,
				message: 'Too many requests from this IP, please try again in one hour'
			})
		);

		// all the routes
		this.app.use(routes);

		this.app.use(errorHandler); //global error handler

		this.app.listen(this.port, () => {
			console.log(`Server running on port ${this.port}...`);
		});
	}
}
