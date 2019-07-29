import React from "react";
import styled from "styled-components";

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
    }

    input[type="submit"]:hover {
        background-color: #0391c7;
    }
`;

const FlexContainer = styled.div`
    display: flex;
`;
export default function ContactEdit() {
    return (
        <ContactView>
            <form>
                <FlexContainer>
                    <div style={{ margin: "10px", width: "50%" }}>
                        <label for="fname">First Name</label>
                        <input
                            type="text"
                            id="fname"
                            name="firstname"
                            value="John"
                        />

                        <label for="phone">Phone</label>
                        <input
                            type="text"
                            id="lname"
                            name="lastname"
                            value="08965377568"
                        />
                        <label for="street">Street Address</label>
                        <input
                            type="text"
                            id="lname"
                            name="lastname"
                            value="Ocean dream avenue"
                        />
                        <label for="company">Company</label>
                        <input
                            type="text"
                            id="lname"
                            name="lastname"
                            value="Shell company"
                        />
                    </div>
                    <div style={{ margin: "10px", width: "50%" }}>
                        <label for="lname">Last Name</label>
                        <input
                            type="text"
                            id="lname"
                            name="lastname"
                            value="Benedict"
                        />
                        <label for="email">Email</label>
                        <input
                            type="email"
                            id="lname"
                            name="lastname"
                            value="John@gmail.com"
                        />
                        <label for="gender">Gender</label>
                        <select id="gender" name="gender">
                            <option value="Male" select>
                                Male
                            </option>
                            <option value="Female">Female</option>
                        </select>
                        <input type="submit" value="Update" />
                    </div>
                </FlexContainer>
            </form>
        </ContactView>
    );
}
