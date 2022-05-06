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
import EditComment from "../edit-comment"

const Comment = ({ loggedUser, user, comment, _id, createdAt, comments, setComments }) => {
    return (
        <StyledComment>
            <ProfileImage image={user.profileImage} size={50} margin="0 10px 0 4px" />
            <RightDiv>
                <CommentContent>
                    <div>
                        <User>
                            <StyledLink to={`/profile/${user.username}`}>
                                <Name>{user.name}</Name>
                                <Username>{user.username}</Username>
                            </StyledLink>
                        </User>
                        <CommentText>{comment}</CommentText>
                    </div>
                    {(loggedUser && (loggedUser._id === user._id)) && (
                        <EditComment commentId={_id} comments={comments} setComments={setComments} />
                    )}
                </CommentContent>
                <CreatedAt>{createdAt}</CreatedAt>
            </RightDiv>
        </StyledComment>
    );
};

export default Comment;