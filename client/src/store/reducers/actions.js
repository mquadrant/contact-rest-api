const FETCH_CONTACTS_PENDING = "FETCH_CONTACTS_PENDING";
const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
const FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR";

export function fetchContactsPending() {
    return {
        type: FETCH_CONTACTS_PENDING,
    };
}

export function fetchContactsSuccess(contacts) {
    return {
        type: FETCH_CONTACTS_SUCCESS,
        contacts: contacts,
    };
}

export function fetchContactsError(error) {
    return {
        type: FETCH_CONTACTS_ERROR,
        error: error,
    };
}
