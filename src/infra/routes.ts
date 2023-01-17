import { Router } from 'express';

import { healthRouter } from './http/health/health.routes';

const routes = Router();

routes.use(healthRouter);

export { routes };
