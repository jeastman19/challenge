import { NextFunction, Request, Response } from 'express';

export function validateQueryParams(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const allowedParams = ['page', 'size', 'query', 'currency'];
    const queryParams = Object.keys(req.query);
    const invalidParams = queryParams.filter(
        param => !allowedParams.includes(param)
    );
    if (invalidParams.length > 0) {
        return res.status(400).json({
            message: `Solo se aceptan las propiedades: ${allowedParams.join(
                ', '
            )}.`,
        });
    }
    next();
}
