import React from "react";
import styled, { css } from "styled-components";
// import Container from "../main/Container";
import Divider from "../main/Divider";
import AvatarCircle from "../main/AvatarCircle";
import ImportImage from "./../../images/Artboard_62-512.png";

const Container = styled.div`
    background: #fff;
    border-radius: 2px;
    margin: 1rem;
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    height: 450px;
    width: 60%;
    margin-top: 30px;

    @media (max-width: 768px) {
        width: 700px;
    }
`;

const Title = styled.div`
    margin: 20px;
    font-size: 18px;
    font-weight: 500;
`;

const RowInputs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 10px 20px 50px;
    input[type="text"],
    input[type="email"],
    select {
        width: 35%;
        padding: 8px 0px;
        margin: 8px 20px;
        display: inline-block;
        border: none;
        font-size: 15px;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        outline: none;
    }
    i {
        font-size: 25px;
    }
`;

const Button = styled.button`
    width: 20%;
    background-color: #039fc7;
    color: white;
    padding: 14px 20px;
    margin: 8px 2px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    :hover {
        background-color: #0391c7;
    }
    ${props =>
        props.danger &&
        css`
            background-color: #dc3545;
        `}
`;

export default function Add() {
    return (
        <Container>
            <Title>Create new contact</Title>
            <Divider></Divider>
            <form>
                <RowInputs>
                    <AvatarCircle
                        size={60}
                        src={ImportImage}
                        border
                        hover
                    ></AvatarCircle>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Last Name"
                    />
                </RowInputs>
                <RowInputs>
                    <i class="fas fa-phone-volume"></i>{" "}
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone number"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email address"
                    />
                </RowInputs>
                <RowInputs>
                    <i class="fas fa-address-card"></i>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Home address"
                    />
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company"
                    />
                </RowInputs>
                <RowInputs>
                    <i class="fas fa-venus-mars"></i>
                    <select id="gender" name="gender">
                        <option value="Male" select>
                            Male
                        </option>
                        <option value="Female">Female</option>
                    </select>
                    <Button danger>Cancel</Button>
                    <Button>Save</Button>
                </RowInputs>
            </form>
        </Container>
    );
}
