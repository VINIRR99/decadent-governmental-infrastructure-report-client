import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export const ReportDescription = styled.div`
    text-decoration: none;
    color: black;
    border-radius: 8px;
    box-shadow: 7px 7px 13px 13px rgba(50, 50, 50, 0.22);
    margin-bottom: 20px;
    padding: 10px;
`;

export const Description = styled.p`
    margin-top: 1px;
    font-size: 1.8rem;
`;

export const CommentContent = styled.div`
    background-color: #dcdee5;
    border-radius: 15px;
    padding: 7px;
    display: flex;
    justify-content: space-between;
`;

export const Comment = styled.p`
    margin-top: 1px;
    font-size: 1.5rem;
`;

export const CreatedAt = styled.p`
    margin: 0;
`;

export const EmptyMessage = styled.h1`
    text-align: center;
`;