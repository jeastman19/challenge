import request from 'supertest';

import { app } from '../../../app';

describe('GET /ping', () => {
    it('should return PONG', async () => {
        const response = await request(app).get('/ping');
        expect(response.status).toBe(200);
        expect(response.text).toBe('PONG');
    });
});
