import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Search from "../main/Search";
import ContactList from "../main/ContactList";
import ContactEdit from "../main/ContactEdit";
import Container from "./../main/Container";
import NewPage from "./../others/NewPage";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchContactsAction from "./../../store/thunks/contactsThunk";
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
    const { fetchContacts, contacts, pending, error } = props;
    const [contact, setContact] = useState(0);
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        fetchContacts();
        return () => {};
    }, [fetchContacts]);

    const clickContact = id => {
        setContact(contacts.filter(contact => contact._id === id)[0]);
        setSelected(id);
    };
    return (
        <Container>
            <Master>
                <Search></Search>
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
                {contact ? (
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
    contacts: getContacts(state),
    pending: getContactsPending(state),
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchContacts: fetchContactsAction,
        },
        dispatch
    );
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
