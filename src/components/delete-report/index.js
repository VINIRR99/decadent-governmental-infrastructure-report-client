import { useNavigate } from "react-router-dom";
import { useState } from "react";
import reportsApi from "../../utils/reportsApi";
import { Div, Message, Buttons, Button, CancelButton } from "./styles";

const DeleteReport = ({ reportId }) => {
    const navigate = useNavigate();
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

    const handleDeletion = async () => {
        await reportsApi.deleteReport(reportId);
        navigate("/");
    };

    return (
        <Div condition={showDeleteMessage}>
            {showDeleteMessage && (
                <div>
                    <Message>Are you sure you want to delete this report?</Message>
                    <Buttons>
                        <Button onClick={handleDeletion}>Delete report</Button>
                        <CancelButton onClick={() => setShowDeleteMessage(false)}>Cancel</CancelButton>
                    </Buttons>
                </div>
            )}
            {!showDeleteMessage && <Button onClick={() => setShowDeleteMessage(true)}>Delete report</Button>}
        </Div>
    )
};

export default DeleteReport;