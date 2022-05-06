import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #24252a;
    border: 0;
    color: white;
`;

export const DropdownList = styled.ul`
    list-style-type: none;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DropdownContent = styled.li`
    text-align: center;
    width: 60px;
    background-color: #dcdee5;
    padding: 5px;
    margin-right: -55px;
    border: solid black;
    cursor: pointer;
    border-width: ${({ borderWidth }) => borderWidth};
    &:hover {
        background-color: #0d259b;
        color: white;
    }
`;