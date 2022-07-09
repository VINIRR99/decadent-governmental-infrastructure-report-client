import { StyledError, Status } from "./styles";

const Error = ({ status, statusText }) => (
    <StyledError>
        <Status>{status}</Status>
        <p>{statusText}</p>
    </StyledError>
);

Error.defaultProps = {
    status: 500,
    statusText: "Internal Server Error"
};

export default Error;