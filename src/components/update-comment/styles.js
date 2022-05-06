import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    border: 3px solid #00B4CC;
    padding: 5px 0;
    height: 20px;
    border-radius: 17px;
    outline: none;
    color: #9DBFAF;
    &:focus {
        color: black;
    }
`;

export const CancelButton = styled.button`
    height: fit-content;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #24252A;
    color: white;
`;

export const SubmitButton = styled(CancelButton)`
    margin-right: 10px;
    background-color: green;
`;