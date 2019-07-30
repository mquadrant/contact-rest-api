import {
    fetchContactsPending,
    fetchContactsSuccess,
    fetchContactsError,
} from "./../reducers/actions";

function fetchContacts() {
    return dispatch => {
        dispatch(fetchContactsPending());
        fetch("https://exampleapi.com/products")
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchContactsSuccess(res.contacts));
                return res.contacts;
            })
            .catch(error => {
                dispatch(fetchContactsError(error));
            });
    };
}

export default fetchContacts;
