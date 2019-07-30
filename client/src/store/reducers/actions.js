export const FETCH_CONTACTS_PENDING = "FETCH_CONTACTS_PENDING";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR";

export function fetchContactsPending() {
    return {
        type: FETCH_CONTACTS_PENDING,
    };
}

export function fetchContactsSuccess(contacts) {
    return {
        type: FETCH_CONTACTS_SUCCESS,
        payload: contacts,
    };
}

export function fetchContactsError(error) {
    return {
        type: FETCH_CONTACTS_ERROR,
        error: error,
    };
}
