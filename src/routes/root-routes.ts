import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

/**
 * Keep All the routes here.
 * You can also create different files for different types of controllers
 */

const router = Router();

router.get('/', (_, res) => {
	return res.status(StatusCodes.OK).json({ message: 'Hello World' });
});

export default router;
