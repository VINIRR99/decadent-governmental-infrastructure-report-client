import { useState } from "react";
import {
    StyledComment,
    RightDiv,
    CommentContent,
    User,
    StyledLink,
    Name,
    Username,
    CommentText,
    CreatedAt
} from "./styles";
import ProfileImage from "../ProfileImage";
import UpdateComment from "../update-comment"
import EditComment from "../edit-comment";

const Comment = ({ loggedUser, user, comment: commentText, _id, createdAt, comments, setComments }) => {
    const [editComment, setEditComment] = useState(false);
    const [comment, setComment] = useState(commentText);

    return (
        <StyledComment>
            <ProfileImage image={user.profileImage} size={50} margin="0 10px 0 4px" />
            <RightDiv>
                <CommentContent>
                    <div style={{width: "100%"}}>
                        <User>
                            <StyledLink to={`/profile/${user.username}`}>
                                <Name>{user.name}</Name>
                                <Username>{user.username}</Username>
                            </StyledLink>
                        </User>
                        {!editComment && <CommentText>{comment}</CommentText>}
                        {editComment && <UpdateComment comment={comment} handleChange={e => setComment(e.target.value)} />}
                    </div>
                    {(loggedUser && (loggedUser._id === user._id)) && (
                        <EditComment
                            commentId={_id}
                            comments={comments}
                            setComments={setComments}
                            setEditComment={setEditComment}
                        />
                    )}
                </CommentContent>
                <CreatedAt>{createdAt}</CreatedAt>
            </RightDiv>
        </StyledComment>
    );
};

export default Comment;