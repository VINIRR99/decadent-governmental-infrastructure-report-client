import { useState } from "react";
import { Div, EditButton, EditList, Buttons } from "./styles";

const EditiComment = ({ commentId, comments, setComments }) => {
    const [showOptions, setShowOptions] = useState(false);

    const editComment = () => {
        setShowOptions(false);
    };

    const deleteComment = async () => {
        setShowOptions(false);
        const deleteComment = window.confirm("Are you sure you want to delete this comment?");
        if (deleteComment) {
            const removedDeleted = [...comments].filter(comment => comment._id !== commentId);
            setComments(removedDeleted);
        };

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