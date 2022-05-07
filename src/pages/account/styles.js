import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #24252A;
    color: white;
    width: fit-content;
`;

export const File = styled.input`
    color: transparent;
    margin-bottom: 10px;
    &::-webkit-file-upload-button {
        visibility: hidden;
    };
    &:before {
        content: "Select profile Image";
        color: black;
        display: inline-block;
        background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
        border: 1px solid #999;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        cursor: pointer;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 10pt;
    };
    &:hover::before {
        border-color: black;
    };
    &:active {
        outline: 0;
    };
    &:active::before {
        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); 
    };
`;

export const AccountInfo = styled.div`
    border: 1px solid black;
    font-size: 1.5rem;
    margin-top: 10px;
    div {
        display: flex;
    }
    button {
        margin-left: 10px;
        background-color: #24252A;
        color: white;
    }
    p {
        margin: 0;
    }
`;