import React from "react";
import styled from "styled-components";
import Container from "./../main/Container";
import Divider from "./../main/Divider";
import ContactList from "../main/ContactList";
import WithMargin from "../main/WithMargin";

const Title = styled.div`
    margin: 20px;
    font-size: 18px;
    font-weight: 500;
`;

const IconSet = styled.div`
    margin-left: auto;
    i {
        padding: 10px;
        border-radius: 48%;
        font-size: 17px;
        margin-right: 5px;
        transition: all 0.1s;
    }
    i:hover {
        font-size: 19px;
        background-color: #f0f0f0;
        cursor: pointer;
    }
    i.fa-trash {
        color: #dc3545;
    }
    i.fa-unlock {
        color: #039fc7;
    }
`;

const Scroll = styled.div`
    /* height: 3em;
    line-height: 1em;
    ::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    ::-webkit-scrollbar:vertical {
        width: 11px;
    }

    ::-webkit-scrollbar:horizontal {
        height: 11px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid white; 
        background-color: rgba(0, 0, 0, 0.5);
    } */
`;

export default function Block() {
    return (
        <Container display="block" width="450px">
            <Title>Blocked Contacts</Title>
            <Divider></Divider>
            <Scroll
                style={{ overflowY: "scroll", height: "calc(100% - 63px)" }}
            >
                <WithMargin
                    marginRight={"20px"}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <ContactList></ContactList>
                    <IconSet>
                        <i class="fas fa-unlock"></i>
                        <i
                            class="fas fa-trash"
                            style={{ marginLeft: "auto" }}
                        ></i>
                    </IconSet>
                </WithMargin>
                <Divider></Divider>
                <WithMargin
                    marginRight={"20px"}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <ContactList></ContactList>
                    <IconSet>
                        <i class="fas fa-unlock"></i>
                        <i
                            class="fas fa-trash"
                            style={{ marginLeft: "auto" }}
                        ></i>
                    </IconSet>
                </WithMargin>
                <Divider></Divider>
                <WithMargin
                    marginRight={"20px"}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <ContactList></ContactList>
                    <IconSet>
                        <i class="fas fa-unlock"></i>
                        <i
                            class="fas fa-trash"
                            style={{ marginLeft: "auto" }}
                        ></i>
                    </IconSet>
                </WithMargin>
                <Divider></Divider>
                <WithMargin
                    marginRight={"20px"}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <ContactList></ContactList>
                    <IconSet>
                        <i class="fas fa-unlock"></i>
                        <i
                            class="fas fa-trash"
                            style={{ marginLeft: "auto" }}
                        ></i>
                    </IconSet>
                </WithMargin>
                <Divider></Divider>
                <WithMargin
                    marginRight={"20px"}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <ContactList></ContactList>
                    <IconSet>
                        <i class="fas fa-unlock"></i>
                        <i
                            class="fas fa-trash"
                            style={{ marginLeft: "auto" }}
                        ></i>
                    </IconSet>
                </WithMargin>
                <Divider></Divider>
                <WithMargin
                    marginRight={"20px"}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <ContactList></ContactList>
                    <IconSet>
                        <i class="fas fa-unlock"></i>
                        <i
                            class="fas fa-trash"
                            style={{ marginLeft: "auto" }}
                        ></i>
                    </IconSet>
                </WithMargin>
                <Divider></Divider>
                <WithMargin
                    marginRight={"20px"}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <ContactList></ContactList>
                    <IconSet>
                        <i class="fas fa-unlock"></i>
                        <i
                            class="fas fa-trash"
                            style={{ marginLeft: "auto" }}
                        ></i>
                    </IconSet>
                </WithMargin>
                <Divider></Divider>
                <WithMargin
                    marginRight={"20px"}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <ContactList></ContactList>
                    <IconSet>
                        <i class="fas fa-unlock"></i>
                        <i
                            class="fas fa-trash"
                            style={{ marginLeft: "auto" }}
                        ></i>
                    </IconSet>
                </WithMargin>
                <Divider></Divider>
            </Scroll>
        </Container>
    );
}
