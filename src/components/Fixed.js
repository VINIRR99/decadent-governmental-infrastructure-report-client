import { useState } from "react";
import reportsApi from "../utils/reportsApi"
import styled from "styled-components";
import { ThumbDownIcon, ThumbUpIcon } from "./Icons";

const StyledFixed = styled.span`
    cursor: ${({ cursor }) => cursor};
    color: ${({ color }) => color};
    font-size: 1.5rem;
    text-align: center;
    > * {
        width: 25px;
    }
`;

const Fixed = ({ fixedReport, loggedUser, reportUserId, reportId }) => {
    const [solved, setSolved] = useState(fixedReport);

    const color = solved ? "blue" : "red";
    const message = solved ? "Problem solved" : "Problem stil unsolved!";
    const Icon = solved ? ThumbUpIcon : ThumbDownIcon;

    const cursor = (loggedUser && (loggedUser._id === reportUserId)) ? "pointer" : "";

    const handleClick = async () => {
        if (loggedUser && (loggedUser._id === reportUserId)) {
            const boolean = solved;
            setSolved(!boolean);
            await reportsApi.updateReport(reportId, { fixed: !boolean });
        };
    };
    
    return (
        <StyledFixed color={color} cursor={cursor} onClick={handleClick}>
            <Icon />
            {message}
        </StyledFixed>
    );
};

export default Fixed;