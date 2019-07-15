import request from 'supertest';
import app from '../src/app';

describe('GET /api', () => {
    test('responds with json', () => {
        return request(app)
            .get('/api')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body).toBe({ message: 'All is well' });
            });
    });
});
