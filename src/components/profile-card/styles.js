import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const Paragraph = styled.p`
    margin: 0;
`;

export const Name = styled(Paragraph)`
    font-size: 1.8rem;
    margin-bottom: 4px;
`;