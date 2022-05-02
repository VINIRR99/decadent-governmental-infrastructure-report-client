import styled from "styled-components";

export const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px 0 4px;
`;

export const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Paragraph = styled.p`
    margin: 0;
`;

export const Username = styled(Paragraph)`
    font-size: 1.8rem;
    margin-bottom: 4px;
`;