import {
    FETCH_CONTACTS_PENDING,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_ERROR,
    CONTACT_SELECTED,
} from "../actions";

const initialState = {
    pending: false,
    contacts: [],
    error: null,
    listClick: false,
};

export function contactReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CONTACTS_PENDING:
            return {
                ...state,
                pending: true,
            };
        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                pending: false,
                contacts: action.payload,
            };
        case FETCH_CONTACTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        default:
            return state;
    }
}
export function contactListReducer(state = initialState, action) {
    switch (action.type) {
        case CONTACT_SELECTED:
            return {
                ...state,
                listClick: action.payload,
            };
        default:
            return state;
    }
}

export const getContacts = state => state.contact.contacts;
export const getContactsPending = state => state.contact.pending;
export const getContactsError = state => state.contact.error;
