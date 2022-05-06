import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
`;

export const LeftDiv = styled.div`
    width: 35%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    font-size: 1.8rem;
`;

export const UserInfo = styled.div`
    margin-top: 5px;
    p {
        margin: 0
    };
`;

export const RightDiv = styled.div`
    width: 100%;
    margin: 30px 0 0 15px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button`
    font-size: 2rem;
    background-color: ${({ condition }) => condition ? "gray" : "white"};
    padding-bottom: 3px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #f0f2f4;
    }
`;

export const EmptyMessage = styled.h1`
    text-align: center;
`;