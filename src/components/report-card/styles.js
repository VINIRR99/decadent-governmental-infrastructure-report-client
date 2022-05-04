import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ReportCardStyled = styled.section`
    border-radius: 8px;
    box-shadow: 7px 7px 13px 13px rgba(50, 50, 50, 0.22);
    margin-bottom: 20px;
    padding: 10px;
`;

export const ReportImage = styled.img`
    width: 100%;
    height: calc(66.5127vw / 2);
`;

export const Paragraph = styled.p`
    font-size: 1.5rem;
`;

export const ShowComments = styled.div`
    display: flex;
    justify-content: center;
`;

export const ShowCommentsButton = styled(Link)`
    text-decoration: none;
    background-color: #88daca;
    border: 0;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
`;