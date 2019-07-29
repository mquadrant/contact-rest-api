import React from "react";
import GeneralImage from "./../../images/final.png";
import styled from "styled-components";

const Avatar = styled.div`
    background: #000 url(${GeneralImage}) center no-repeat;
    background-size: contain;
`;
export default function ContactList() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "5px 5px",
            }}
        >
            <Avatar
                style={{
                    width: "50px",
                    borderTop: "5px",
                    borderRadius: "48%",
                    height: "50px",
                }}
            ></Avatar>
            <div
                style={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    marginLeft: "10px",
                }}
            >
                <div>Name</div>
                <div>08123456789</div>
            </div>
        </div>
    );
}
