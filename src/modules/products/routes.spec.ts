import request from 'supertest';

import { app } from '../../app';

describe('GET /products', () => {
    test('should return 200 OK', async () => {
        const response = await request(app).get('/products');
        expect(response.status).toBe(200);
    });
});
