import styled from "styled-components";

export const Div = styled.div`
`;

export const EditButton = styled.button`
    height: fit-content;
    border: 0;
    border-radius: 40%;
    background-color: ${({ condition }) => condition ? "gray" : "#dcdee5"};
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
        background-color: #bac2db;
    }
`;

export const EditList = styled.ul`
    list-style-type: none;
    width: 0;
    height: 0;
    padding: 0;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Buttons = styled.li`
    text-align: center;
    width: 50px;
    background-color: #dcdee5;
    padding: 5px;
    border: solid black;
    cursor: pointer;
    border-width: ${({ borderWidth }) => borderWidth};
    &:hover {
        background-color: #bac2db;
    }
`;