import request from 'supertest';

import { app } from '../../app';

describe('GET /products', () => {
    test('should return 200 OK', async () => {
        const response = await request(app).get('/products');
        expect(response.status).toBe(200);
    });

    test('only accept the properties: page, size, query y currency', async () => {
        const response = await request(app).get('/products?houre=12');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            message:
                'Solo se aceptan las propiedades: page, size, query, currency.',
        });
    });
});
