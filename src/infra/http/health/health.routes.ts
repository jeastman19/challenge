import { Request, Response, Router } from 'express';

const healthRouter = Router();

healthRouter.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('PONG');
});

export { healthRouter };
