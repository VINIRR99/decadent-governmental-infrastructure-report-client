import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
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