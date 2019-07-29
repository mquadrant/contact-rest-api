import React from "react";
import styled from "styled-components";

const SearchCon = styled.div`
    margin: 0 5px;
    input[type="text"] {
        padding: 6px;
        margin-top: 8px;
        font-size: 14px;
        outline: none;
    }
    button {
        padding: 8px 10px;
        margin-top: 8px;
        margin-left: -2px;
        background: #ddd;
        font-size: 14px;
        border: none;
        cursor: pointer;
    }
    button:hover {
        background: #ccc;
    }
    @media screen and (max-width: 600px) {
        input[type="text"],
        button {
            float: none;
            display: block;
            text-align: left;
            width: 100%;
            margin: 0;
            padding: 14px;
        }
        input[type="text"] {
            border: 1px solid #ccc;
        }
    }
`;

export default function Search() {
    return (
        <SearchCon className="search-container">
            <form>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                    <i class="fa fa-search"></i>
                </button>
            </form>
        </SearchCon>
    );
}
