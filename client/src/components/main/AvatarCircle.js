import React from "react";
import styled, { css } from "styled-components";
import GeneralImage from "./../../images/final.png";

const Avatar = styled.div`
    width: 50px;
    height: 50px;
    border-top: 5px;
    border-radius: 48%;
    background: #000 url(${GeneralImage}) center no-repeat;
    background-size: contain;
    ${props =>
        props.position === "absolute" &&
        css`
            position: absolute;
            top: ${props => props.top};
            bottom: ${props => props.bottom};
            right: ${props => {
                return props.size
                    ? `calc(${props.right} - ${parseInt(props.size) / 2}px)`
                    : props.right;
            }};

            left: ${props => props.left};
        `};
    ${props =>
        props.size &&
        css`
            width: ${props => `${props.size}px`};
            height: ${props => `${props.size}px`};
        `};
    ${props =>
        props.shadow &&
        css`
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24);
        `};
`;
export default function AvatarCircle(props) {
    return <Avatar {...props}></Avatar>;
}
