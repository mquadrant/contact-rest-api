import { getContacts, getBlockedContacts } from '../src/controllers/index';

describe('API Controller methods', () => {
    test('getContacts should return all the contacts', () => {
        const contacts = getContacts();
        expect(contacts).toContainEqual({
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
        //check that the right date format is passed
        expect(isNaN(new Date(contacts[0].created).getDate())).toBeFalsy;
    });

    test('getBlockedContacts should return all the blocked contacts', () => {
        const blockedContacts = getBlockedContacts();
        expect(blockedContacts).toContainEqual({
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
        //check that the right date format is passed
        expect(isNaN(new Date(blockedContacts[0].created).getDate())).toBeFalsy;
    });
});
