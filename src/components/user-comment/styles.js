import styled from "styled-components";
import { Link } from "react-router-dom";

export const ReportDescription = styled.div`
    text-decoration: none;
    color: black;
    border-radius: 8px;
    box-shadow: 7px 7px 13px 13px rgba(50, 50, 50, 0.22);
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
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
    box-sizing: border-box;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export const Comment = styled.p`
    margin-top: 1px;
    font-size: 1.5rem;
`;

export const CreatedAt = styled.p`
    margin: 0;
`;