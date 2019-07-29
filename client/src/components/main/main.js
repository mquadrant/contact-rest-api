import React from "react";
import styled from "styled-components";
import Search from "./Search";
import ContactList from "./ContactList";
import Divider from "./Divider";
import AvatarCircle from "./AvatarCircle";
import ContactEdit from "./ContactEdit";

const MainBody = styled.div`
    width: 100%;
    height: calc(100vh - 52px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const SideTray = styled.div`
    position: absolute;
    width: 90px;
    height: auto;
    top: 41%;
    left: -90px;
    z-index: 1000;
    font-size: 12px;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.5s;
    :hover {
        left: 0;
    }
    .trayIcon {
        padding: 15px 5px;
        border-bottom: 0.5px solid #f0f0f0;
        transition: all 0.3s;
    }
    .trayIcon:hover {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        background-color: #f0f0f0;
        cursor: pointer;
    }
    .trayIcon i {
        margin-right: 10px;
    }
`;

const Beacon = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: -44%;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    line-height: 35px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background: #039fc7;
    :hover {
        cursor: pointer;
    }
`;

const Container = styled.div`
    display: flex;

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

const Master = styled.div`
    background: #fff;
    width: 35%;
    padding: 5px 0;
    border-right: 1px solid #f0f0f0;
`;

const Detail = styled.div`
    width: 100%;
`;
export default function main() {
    return (
        <MainBody>
            <Container>
                <Master>
                    <Search></Search>
                    <div>
                        <ContactList></ContactList>
                        <Divider></Divider>
                    </div>
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
            <SideTray>
                <div className="trayIcon">
                    <i class="fas fa-home" />
                    Home
                </div>
                <div className="trayIcon">
                    <i class="fas fa-user-plus" />
                    Add
                </div>
                <div className="trayIcon">
                    <i className="fas fa-user-lock" />
                    Blocked
                </div>
                <Beacon>
                    <i class="fas fa-star"></i>
                </Beacon>
            </SideTray>
        </MainBody>
    );
}
