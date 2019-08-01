import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Search from "../main/Search";
import ContactList from "../main/ContactList";
import ContactEdit from "../main/ContactEdit";
import Container from "./../main/Container";
import NewPage from "./../others/NewPage";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    fetchContactsAction,
    selectContactsAction,
} from "./../../store/thunks/contactsThunk";
import {
    getContactsPending,
    getContacts,
    getContactsError,
} from "./../../store/reducers/contactReducer";
import ContactHeader from "../main/ContactHeader";

const Master = styled.div`
    background: #fff;
    width: 37%;
    padding: 5px 0;
    border-right: 1px solid #f0f0f0;
`;

const Detail = styled.div`
    width: 100%;
`;

const Scroll = styled.div`
    overflow: auto;
    height: calc(100% - 39px);
    .contactList {
        padding: 10px 0;
        border-bottom: 0.5px solid #f0f0f0;
    }
    .contactList:hover {
        background-color: #f0f0f0;
        cursor: pointer;
    }
    @media screen and (max-width: 1200px) {
        height: calc(100% - 88px);
    }
`;

const ListItem = styled.div`
    ${props =>
        props.selected &&
        css`
            background-color: #f0f0f0;
        `}
`;

function Home(props) {
    const {
        fetchContacts,
        receivedContacts,
        pending,
        error,
        contactSelected,
        selectedStatus,
    } = props;
    const [contacts, setContacts] = useState(receivedContacts);
    const [contact, setContact] = useState(0);
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        fetchContacts();
        return () => {};
    }, [fetchContacts]);

    useEffect(() => {
        setContacts(receivedContacts);
    }, [receivedContacts]);

    const clickContact = id => {
        setContact(contacts.filter(contact => contact._id === id)[0]);
        setSelected(id);
        selectedStatus();
    };

    const searching = term => {
        if (term !== "") {
            setContacts(
                receivedContacts.filter(contact => {
                    var re = new RegExp(term, "gi");
                    return (
                        re.test(`${contact.first_name} ${contact.last_name}`) ||
                        re.test(contact.phone)
                    );
                })
            );
        } else {
            setContacts(receivedContacts);
        }
    };
    return (
        <Container>
            <Master>
                <Search searching={searching}></Search>
                <Scroll>
                    {contacts.map(contact => (
                        <ListItem
                            className="contactList"
                            id={contact._id}
                            onClick={() => clickContact(contact._id)}
                            selected={selected === contact._id}
                        >
                            <ContactList
                                fname={contact.first_name}
                                lname={contact.last_name}
                                phone={contact.phone}
                            ></ContactList>
                        </ListItem>
                    ))}
                </Scroll>
            </Master>
            <Detail>
                {contactSelected ? (
                    <>
                        <ContactHeader></ContactHeader>
                        <ContactEdit contact={contact}></ContactEdit>
                    </>
                ) : (
                    <>
                        <NewPage></NewPage>
                    </>
                )}
            </Detail>
        </Container>
    );
}

const mapStateToProps = state => ({
    error: getContactsError(state),
    receivedContacts: getContacts(state),
    pending: getContactsPending(state),
    contactSelected: state.contactSelect.listClick,
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchContacts: fetchContactsAction,
            selectedStatus: selectContactsAction,
        },
        dispatch
    );
// const mapDispatchToProps = dispatch => {
//     return {
//         selectedStatus: () => {
//             dispatch(contactSelected(true));
//         },
//     };
// };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
