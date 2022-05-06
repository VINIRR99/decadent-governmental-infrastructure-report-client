import { useState } from "react";
import reportsApi from "../../utils/reportsApi";
import { Div, EditButton, EditList, Buttons } from "./styles";

const EditiComment = ({ commentId, comments, setComments, setEmptyComments }) => {
    const [showOptions, setShowOptions] = useState(false);

    const editComment = () => {
        setShowOptions(false);
    };

    const deleteComment = async () => {
        setShowOptions(false);
        const deleteComment = window.confirm("Are you sure you want to delete this comment?");
        if (deleteComment) {
            const removedDeleted = [...comments].filter(comment => comment._id !== commentId);
            if (setEmptyComments && (removedDeleted.length === 0)) setEmptyComments(true);
            setComments([...removedDeleted]);
            await reportsApi.deleteComment(commentId);
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