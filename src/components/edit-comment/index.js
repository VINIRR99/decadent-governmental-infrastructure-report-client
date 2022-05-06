import { useState } from "react";
import { Div, EditButton, EditList, Buttons } from "./styles";

const EditiComment = () => {
    const [showOptions, setShowOptions] = useState(false);

    const editComment = () => {
        setShowOptions(false);
    };

    const deleteComment = () => {
        setShowOptions(false);
    };

    return (
        <Div>
            <EditButton condition={showOptions} onClick={() => setShowOptions(!showOptions)}>
                <strong>...</strong>
            </EditButton>
            {showOptions && (
                <EditList>
                    <Buttons borderWidth="1px" onClick={editComment}>Edit</Buttons>
                    <Buttons borderWidth="0 1px 1px" onClick={deleteComment}>Delete</Buttons>
                </EditList>
            )}
        </Div>
    );
};

export default EditiComment;