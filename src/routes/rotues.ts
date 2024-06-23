import { Router } from 'express';

/**
 * Keep All the routes here.
 * You can also create different files for different types of controllers
 */

const router = Router();

router.get('/', () => {
	return 'hello';
});

export default router;
