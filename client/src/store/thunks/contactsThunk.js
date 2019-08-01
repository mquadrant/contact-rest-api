import {
    fetchContactsPending,
    fetchContactsSuccess,
    fetchContactsError,
    contactSelected,
} from "../actions";

export function fetchContactsAction() {
    return dispatch => {
        dispatch(fetchContactsPending());
        fetch("http://localhost:3200/api/v1/contacts")
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchContactsSuccess(res.data.contacts));
                return res.data.contacts;
            })
            .catch(error => {
                dispatch(fetchContactsError(error));
            });
    };
}
export function selectContactsAction() {
    return dispatch => {
        dispatch(contactSelected(true));
    };
}
