import styled from "styled-components";

export const Div = styled.div`
    margin-left: 10px;
    border: ${({ condition }) => condition ? "2px solid #767676" : ""};
    background-color: ${({ condition }) => condition ? "#dd7358" : ""};
`;

export const Message = styled.p`
    font-size: 1.5rem;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button`
    height: fit-content;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #e54e27;
    color: white;
    border-color: #dd7358;
`;

export const CancelButton = styled(Button)`
    background-color: #24252a;
    border-color: #767676;
    margin-left: 10px;
`;