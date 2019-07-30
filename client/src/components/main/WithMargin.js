import styled, { css } from "styled-components";

export default styled.div`
    margin-left: ${props => (props.marginLeft ? props.marginLeft : `10px`)};
    margin-right: ${props => (props.marginRight ? props.marginRight : `10px`)};
    margin-top: ${props => (props.marginTop ? props.marginTop : `0px`)};
    margin-bottom: ${props =>
        props.marginBottom ? props.marginBottom : `0px`};
    ${props =>
        props.style &&
        css`
            ${props => props.style}
        `};
`;
