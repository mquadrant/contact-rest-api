import React from "react";
import styled, { css } from "styled-components";
import GeneralImage from "./../../images/final.png";

const Avatar = styled.div`
    width: 50px;
    border-top: 5px;
    border-radius: 48%;
    height: 50px;
    background: #000 url(${GeneralImage}) center no-repeat;
    background-size: contain;
    ${props =>
        props.position === "absolute" &&
        css`
            position: absolute;
            top: ${props => props.top};
            bottom: ${props => props.bottom};
            right: ${props => props.right};
            left: ${props => props.left};
        `};
`;
export default function AvatarCircle(props) {
    return <Avatar {...props}></Avatar>;
}
