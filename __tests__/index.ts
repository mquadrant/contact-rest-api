import { getContacts } from '../src/controllers/index';

describe('Get all contacts', () => {
    test('should return all the contacts', () => {
        expect(getContacts()).toContainEqual({
            id: expect.any(String),
            first_name: expect.any(String),
            last_name: expect.any(String),
            phone: expect.any(String),
            email: expect.any(String),
            str_address: expect.any(String),
            gender: expect.any(String),
            company_name: expect.any(String),
            isBlocked: expect.any(Boolean),
            created: expect.any(String),
        });
    });
});
