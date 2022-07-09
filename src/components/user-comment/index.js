import { useState } from "react";
import UpdateComment from "../update-comment";
import EditComment from "../edit-comment";
import { ReportDescription, Description, CommentContent, StyledLink, Comment, CreatedAt } from "./styles";

const UserComment = ({
    report,
    comment: commentText,
    createdAt,
    loggedUser,
    user,
    _id,
    comments,
    setComments,
    setEmptyComments
}) => {
    const [editComment, setEditComment] = useState(false);
    const [comment, setComment] = useState(commentText)

    return (
        <ReportDescription>
            <Description>{report.description}</Description>
            <CommentContent>
                {!editComment && (
                    <StyledLink to={`/report/${report._id}`}>
                        <Comment>{comment}</Comment>
                        <CreatedAt>{createdAt.slice(0, 10).split("-").reverse().join("/")}</CreatedAt>
                    </StyledLink>
                )}
                {editComment && (
                    <UpdateComment
                        comment={comment}
                        setComment={setComment}
                        setEditComment={setEditComment}
                        commentId={_id}
                    />
                )}
                {(!editComment && loggedUser && (loggedUser._id === user._id)) && (
                    <EditComment
                        commentId={_id}
                        comments={comments}
                        setComments={setComments}
                        setEmptyComments={setEmptyComments}
                        setEditComment={setEditComment}
                    />
                )}
            </CommentContent>
        </ReportDescription>
    )
};

export default UserComment;