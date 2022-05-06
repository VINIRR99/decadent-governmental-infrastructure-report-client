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

const Comment = ({ user, comment, createdAt }) => {
    return (
        <StyledComment>
            <ProfileImage image={user.profileImage} size={50} margin="0 10px 0 4px" />
            <RightDiv>
                <CommentContent>
                    <User>
                        <StyledLink to={`/profile/${user.username}`}>
                            <Name>{user.name}</Name>
                            <Username>{user.username}</Username>
                        </StyledLink>
                    </User>
                    <CommentText>{comment}</CommentText>
                </CommentContent>
                <CreatedAt>{createdAt}</CreatedAt>
            </RightDiv>
        </StyledComment>
    );
};

export default Comment;