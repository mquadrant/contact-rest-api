import styled from "styled-components";

export default styled.div`
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
