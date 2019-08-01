import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchContactsAction } from "./../../store/thunks/contactsThunk";
import {
    getContactsPending,
    getContacts,
    getContactsError,
} from "./../../store/reducers/contactReducer";

const ContactView = styled.div`
    border-radius: 5px;
    padding: 20px;
    input[type="text"],
    input[type="email"],
    select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        outline: none;
    }

    input[type="submit"] {
        width: 100%;
        background-color: #039fc7;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
    }
    input[type="reset"] {
        width: 100%;
        background-color: #6c757d;
        color: white;
        padding: 14px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
    }

    input[type="submit"]:hover {
        background-color: #0391c7;
    }
    input[type="reset"]:hover {
        background-color: #6c7f7d;
    }
`;

const FlexContainer = styled.div`
    display: flex;
`;
function ContactEdit(props) {
    const { fetchContacts, contacts, pending, error, contact } = props;

    let defaultContact = {
        fname: contact.first_name,
        lname: contact.last_name,
        email: contact.email,
        phone: contact.phone,
        address: contact.str_address,
        gender: contact.gender,
        company: contact.company_name,
    };
    useEffect(() => {
        setValues({
            fname: contact.first_name,
            lname: contact.last_name,
            email: contact.email,
            phone: contact.phone,
            address: contact.str_address,
            gender: contact.gender,
            company: contact.company_name,
        });
        return () => {};
    }, [contact]);
    const [values, setValues] = useState({ ...defaultContact });

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };
    const handleSubmit = event => {
        event.preventDefault();
    };
    const handleReset = () => {
        setValues(defaultContact);
    };
    return (
        <ContactView>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <FlexContainer>
                    <div style={{ margin: "10px", width: "50%" }}>
                        <label for="fname">First Name</label>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            onChange={handleChange}
                            value={values.fname}
                        />

                        <label for="phone">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value="08965377568"
                            onChange={handleChange}
                            value={values.phone}
                        />
                        <label for="street">Street Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            onChange={handleChange}
                            value={values.address}
                        />
                        <label for="company">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            onChange={handleChange}
                            value={values.company}
                        />
                    </div>
                    <div style={{ margin: "10px", width: "50%" }}>
                        <label for="lname">Last Name</label>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            onChange={handleChange}
                            value={values.lname}
                        />
                        <label for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        <label for="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            onChange={handleChange}
                            value={values.gender}
                        >
                            <option name="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input type="reset" value="Reset" />
                        <input type="submit" value="Update" />
                    </div>
                </FlexContainer>
            </form>
        </ContactView>
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
)(ContactEdit);
