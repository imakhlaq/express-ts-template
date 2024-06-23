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
	abstract readonly statusCode: number;
	abstract readonly errors: CustomErrorContent[];
	abstract readonly logging: boolean;

	constructor(message: string) {
		super(message);

		// Only because we are extending a built-in class
		Object.setPrototypeOf(this, CustomError.prototype);
	}
}
