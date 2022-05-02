import styled from "styled-components";
import { ThumbDownIcon, ThumbUpIcon } from "./Icons";

const StyledFixed = styled.span`
    font-size: 1.5rem;
    text-align: center;
    > * {
        width: 25px;
    }
`;

const Fixed = ({ status }) => {
    let color = ""
    let message = "";
    let Icon;
    switch (status) {
        case "unsolved":
            message = "Problem stil unsolved!";
            color = "red";
            Icon = ThumbDownIcon;
            break;
        case "solved":
            message = "Problem solved";
            color = "blue";
            Icon = ThumbUpIcon;
            break;
        default:
            message = "Error: wrong status!";
            color = "red";
            Icon = ThumbDownIcon;
    };
    
    return (
        <StyledFixed style={{ color }}>
            <Icon />
            {message}
        </StyledFixed>
    );
};

export default Fixed;