import { Router } from 'express';

const router = Router();

router.get('/products', (request, response) => {
    return response.status(200).send();
});

export default router;
