import { useState } from "react";
import { Div, Message, Buttons, Button, CancelButton } from "./styles";

const DeleteReport = () => {
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

    return (
        <Div condition={showDeleteMessage}>
            {showDeleteMessage && (
                <div>
                    <Message>Are you sure you want to delete this report?</Message>
                    <Buttons>
                        <Button>Delete report</Button>
                        <CancelButton onClick={() => setShowDeleteMessage(false)}>Cancel</CancelButton>
                    </Buttons>
                </div>
            )}
            {!showDeleteMessage && <Button onClick={() => setShowDeleteMessage(true)}>Delete report</Button>}
        </Div>
    )
};

export default DeleteReport;