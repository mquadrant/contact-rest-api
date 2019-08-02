import React from "react";
import styled from "styled-components";

const header = {
    backgroundColor: "#039fc7",
    height: "52px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    padding: "0 20px",
    position: "fixed",
    width: "57%",
    right: "50%",
    left: "50%",
    transform: "translate(-50%, 0)",
    borderRadius: "0 0 15px 15px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
};

const MenuIcons = styled.span`
    margin: 10px;
    :hover {
        color: #ffa726;
    }
`;
const Logo = styled.div`
    margin-left: 10px;
    position: relative;
    font-size: 18px;
`;
const LogoStart = styled.div`
    background: #ffa726;
    display: inline-block;
    text-align: center;
    margin-right: 2px;
    width: 20px;
`;
const Menu = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 20px;
`;
const Container = styled.div`
    width: 100%;
    /* width: 1366px; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default function Header() {
    return (
        <div>
            <header style={header}>
                <Container>
                    <Logo className="site-logo">
                        <LogoStart>i</LogoStart>Contact
                    </Logo>
                    <Menu>
                        <MenuIcons>
                            <i class="fas fa-user-plus" />
                        </MenuIcons>
                        <MenuIcons>
                            <i className="fas fa-user-lock"></i>
                        </MenuIcons>
                    </Menu>
                </Container>
            </header>
        </div>
    );
}
