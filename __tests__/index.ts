import {
    getContacts,
    getBlockedContacts,
    getContact,
    CreateContact,
    unBlockContact,
    blockContact,
    updateContact,
    deleteContact,
} from '../src/controllers/index';

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
        expect(contacts).toBeInstanceOf(Array);
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
    test('getContact should return specific contact', () => {
        const contact = getContact('45745c60-7b1a-11e8-9c9c-2d43331b1a3e');
        expect(contact).toEqual({
            id: '45745c60-7b1a-11e8-9c9c-2d43331b1a3e',
            first_name: 'Hazel',
            last_name: 'Ruilton',
            phone: '710-165-5129',
            email: 'hruilton1@virginia.edu',
            str_address: '884 Northfield Road',
            gender: 'Female',
            company_name: 'Demizz',
            isBlocked: false,
            created: '2019-04-18T08:20:48+01:00',
        });
        //check that the right date format is passed
        expect(isNaN(new Date(contact.created).getDate())).toBeFalsy;
    });
    test('getContact should return Contact not found when id is not found', () => {
        expect(() => {
            getContact('45745c60');
        }).toThrow('Contact not found');
    });
    test('CreateContact should save the contact and return the contact', () => {
        const contact = new CreateContact({
            first_name: 'Benjamin',
            last_name: 'Mark',
            phone: '08067140834',
            email: 'mcgiri@stamford.edu',
            str_address: '6Ba8 Stamford Circle',
            gender: 'Male',
            company_name: 'Quadrangle Inc',
        }).save();
        expect(contact).resolves.toEqual({
            id: expect.any(String),
            first_name: 'Benjamin',
            last_name: 'Mark',
            phone: '08067140834',
            email: 'mcgiri@stamford.edu',
            str_address: '6Ba8 Stamford Circle',
            gender: 'Male',
            company_name: 'Quadrangle Inc',
            isBlocked: expect.any(Boolean),
            created: expect.any(String),
        });
    });
    test('unBlockContact should unblock contact and return the contact', () => {
        const contact = unBlockContact('45745c60-7b1a-11e8-9c9c-2d42116eaa3e');
        expect(contact).resolves.toEqual({
            company_name: expect.any(String),
            created: expect.any(String),
            email: expect.any(String),
            first_name: expect.any(String),
            gender: expect.any(String),
            id: '45745c60-7b1a-11e8-9c9c-2d42116eaa3e',
            isBlocked: false,
            last_name: expect.any(String),
            phone: expect.any(String),
            str_address: expect.any(String),
        });
    });
    test('blockContact should block a contact successfully', () => {
        expect(
            blockContact('45745c60-7b1a-11e8-9c9c-2d42116eaa3e')
        ).resolves.toBe('Contact blocked successfully!');
        expect(blockContact('45745c60-7b1a-11e83e')).rejects.toBe(
            'Sorry, something went wrong!'
        );
    });
    test('updateContact should block a contact and return contact not found', () => {
        const contact = updateContact('45745c60-7b1a-11e8-9c9c-2d43331b1a3e', {
            first_name: 'Hazel',
            last_name: 'Benjamin',
            phone: '710-165-5129',
            email: 'hruilton1@virginia.edu',
            str_address: '884 Citylord Road',
            gender: 'Female',
            company_name: 'Demizz',
        });
        expect(contact).resolves.toEqual({
            id: '45745c60-7b1a-11e8-9c9c-2d43331b1a3e',
            first_name: 'Hazel',
            last_name: 'Benjamin',
            phone: '710-165-5129',
            email: 'hruilton1@virginia.edu',
            str_address: '884 Citylord Road',
            gender: 'Female',
            company_name: 'Demizz',
            isBlocked: expect.any(Boolean),
            created: expect.any(String),
        });
    });
    test('deleteContact should delete a contact', () => {
        const result = deleteContact('45745c60-7b1a-11e8-9c9c-2d43331b1a3e');
        expect(result).toBe('Successfully deleted');
    });
});
