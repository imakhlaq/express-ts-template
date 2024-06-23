//extending the request so it can hold auth user id

declare global {
	namespace Express {
		interface Request {
			customField?: string;
		}
	}
}
