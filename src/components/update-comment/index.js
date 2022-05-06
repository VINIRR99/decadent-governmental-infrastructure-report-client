import { useState } from "react";
import reportsApi from "../../utils/reportsApi";
import { Input, SubmitButton, CancelButton } from "./styles";

const UpdateComment = ({ comment, setComment, setEditComment, commentId }) => {
    const [commentInput, setCommentInput] = useState(comment);

    const handleCancelButton = event => {
        event.preventDefault();
        setEditComment(false);
        setCommentInput(comment);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (commentInput === comment) {
            setEditComment(false);
        } else {
            setComment(commentInput);
            setEditComment(false);
            await reportsApi.updateComment(commentId, commentInput);
        };
    };

    return (
        <form onSubmit={handleSubmit} style={{width: "100%"}}>
            <Input type="text" value={commentInput} onChange={e => setCommentInput(e.target.value)} />
            <div>
                <SubmitButton type="submit">Edit</SubmitButton>
                <CancelButton onClick={handleCancelButton}>Cancel</CancelButton>
            </div>
        </form>
    );
};

export default UpdateComment;