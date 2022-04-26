import styled from "styled-components";

export const SearchBar = styled.span`
    margin-right: 10px;
    width: 100%;
    position: relative;
    display: flex;
`;

export const Input = styled.input`
    width: 100%;
    border: 3px solid #00B4CC;
    border-left: none;
    padding: 5px;
    height: 20px;
    border-radius: 0 5px 5px 0;
    outline: none;
    color: #9DBFAF;
    &:focus {
        color: #00B4CC;
    }
`;

export const SearchButton = styled.button`
    width: 40px;
    height: 36px;
    border: 1px solid #00B4CC;
    background: #00B4CC;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    font-size: 20px;
`;