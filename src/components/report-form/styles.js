import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: ${({ marginBotton }) => marginBotton};
`;

export const File = styled.input`
    color: transparent;
    margin-bottom: 10px;
    &::-webkit-file-upload-button {
        visibility: hidden;
    };
    &:before {
        content: "Select the image for the report";
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

export const MissImg = styled.p`
    margin: 0;
    color: red;
`;

export const Input = styled.input`
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    ::placeholder {
        color: ${({ placeholderColor }) => placeholderColor};
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: ${({ placeholderColor }) => placeholderColor};
    }

    ::-ms-input-placeholder {
        color: ${({ placeholderColor }) => placeholderColor};
    }
`;

export const Textarea = styled.textarea`
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #24252A;
    color: white;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const SubmitButton = styled(Button)`
    background-color: green;
    margin-right: 10px;
`;