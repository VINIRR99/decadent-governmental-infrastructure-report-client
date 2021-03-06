import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    border: 3px solid #00B4CC;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 17px 0 0 17px;
    outline: none;
    color: #9DBFAF;
    &:focus {
        color: black;
    }
`;

export const Button = styled.button`
    width: fit-content;
    height: 36px;
    border: 1px solid #00B4CC;
    background: #00B4CC;
    text-align: center;
    color: #fff;
    border-radius: 0 17px 17px 0;
    cursor: pointer;
    font-size: 20px;
`;