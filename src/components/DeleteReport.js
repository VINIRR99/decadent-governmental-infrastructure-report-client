import styled from "styled-components";

const Button = styled.button`
    height: fit-content;
    margin-left: 10px;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #e54e27;
    color: white;
    border-color: #dd7358;
`;

const DeleteReport = () => {
    return <Button>Delete report</Button>
};

export default DeleteReport;