import styled from "styled-components";

export const StyledComment = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const RightDiv = styled.div`
    width: 100%;
`;

export const CommentContent = styled.div`
    background-color: #dcdee5;
    border-radius: 15px;
    padding: 7px;
`;

const Paragraph = styled.p`
    margin: 0;
`;

export const Username = styled(Paragraph)`
    color: blue;
`;

export const Name = styled(Username)`
    font-size: 1.8rem;
`;

export const CreatedAt = styled(Paragraph)`
    margin-left: 8px;
`;

export const CommentText = styled.p`
    font-size: 1.5rem;
    margin: 5px 0 0 5px;
`;