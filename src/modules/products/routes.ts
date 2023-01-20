import { Request, Response, Router } from 'express';

import { validateQueryParams } from './middlewares';

const router = Router();

router.get('/products', validateQueryParams, (req: Request, res: Response) => {
    // validar que req.query no tenga propiedades diferentes a page, size, query y currency

    // Solo se admiten las propiedades: page, size, query y currency
    const { page, size, query, currency } = req.query;

    return res.status(200).send();
});

export default router;
