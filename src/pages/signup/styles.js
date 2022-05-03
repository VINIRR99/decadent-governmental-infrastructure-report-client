import styled from "styled-components";

export const Form = styled.form`
    margin: 5% 35%;
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    box-shadow: 7px 7px 13px 13px rgba(50, 50, 50, 0.22);
    border-radius: 8px;
    @media(max-width: 540px) {
        margin: 5% 10%;
    }
`;

export const Title = styled.h1`
    margin-top: 0;
    text-align: center;
    color: #95969b;
`;

export const Input = styled.input`
    margin: 3% 10%;
    border-radius: 20px;
    padding: 10px 15px;
    border-color: #e1e8ee;
`;

export const Button = styled.button`
    margin: 3% 20% 0;
    padding: 10px 0;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
    background-color: #2d354c;
`;