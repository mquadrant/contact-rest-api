import {
    FETCH_CONTACTS_PENDING,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_ERROR,
} from "./actions";

const initialState = {
    pending: false,
    contacts: [],
    error: null,
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

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;
