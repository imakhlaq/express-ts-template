import { StatusCodes } from 'http-status-codes';

export type CustomErrorContent = {
	message: string;
	context?: { [key: string]: never };
};

/**
 * This abstract class ensures that every custom you will create their going to be consistency.
 * Always implement this abstract class to the custom error type you are creating.
 */
export abstract class CustomError extends Error {
	//abstract properties need to be implemented by custom error classes
	public readonly statusCode: number;
	public readonly message: string;
	public readonly path: string;

	//abstract readonly errors: CustomErrorContent[];

	protected constructor(statusCode?: number, message?: string, path?: string) {
		super(message ?? 'Bad Request');

		this.statusCode = statusCode ?? StatusCodes.BAD_REQUEST;
		this.message = message ?? 'Bad Request';
		this.path = `/api/v1/${path}`;

		// Only because we are extending a built-in class
		Object.setPrototypeOf(this, CustomError.prototype);
	}
}
