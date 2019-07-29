import React from "react";
import styled from "styled-components";

const header = {
    backgroundColor: "#282c34",
    height: "52px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    padding: "0 20px",
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
`;
const LogoStart = styled.span`
    background: #ffa726;
    display: inline-block;
    text-align: center;
    margin-right: 2px;
    width: 30px;
    ::before {
        content: " ";
        position: absolute;
        color: #fff;
        width: 10px;
        height: 20px;
        left: 20px;
        top: -9px;
        border-radius: 10px 10px;
        background: #282c34;
    }
    ::after {
        content: " ";
        position: absolute;
        color: #fff;
        width: 12px;
        height: 20px;
        left: 0px;
        top: -5px;
        border-radius: 10px 10px;
        background: #282c34;
    }
`;
const Menu = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 20px;
`;
const Container = styled.div`
    width: 1366px;
    display: flex;
    flex-direction: row;
    justify-content: right;
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
