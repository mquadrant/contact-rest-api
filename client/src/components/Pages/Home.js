import React, { useState } from "react";
import styled from "styled-components";
import Search from "../main/Search";
import ContactList from "../main/ContactList";
import Divider from "../main/Divider";
import AvatarCircle from "../main/AvatarCircle";
import ContactEdit from "../main/ContactEdit";
import Container from "./../main/Container";

const Master = styled.div`
    background: #fff;
    width: 35%;
    padding: 5px 0;
    border-right: 1px solid #f0f0f0;
`;

const Detail = styled.div`
    width: 100%;
`;

const Scroll = styled.div`
    overflow: auto;
    height: calc(100% - 39px);
    @media screen and (max-width: 600px) {
        height: calc(100% - 88px);
    }
`;

export default function Home() {
    return (
        <Container>
            <Master>
                <Search></Search>
                <Scroll>
                    <ContactList></ContactList>
                    <Divider></Divider>
                </Scroll>
            </Master>
            <Detail>
                <div
                    style={{
                        background: "#039fc7",
                        width: "100%",
                        height: "100px",
                        position: "relative",
                    }}
                >
                    <AvatarCircle
                        size="70"
                        position="absolute"
                        top="50%"
                        right="50%"
                    ></AvatarCircle>
                </div>
                <ContactEdit></ContactEdit>
            </Detail>
        </Container>
    );
}
