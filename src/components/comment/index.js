import { StyledComment, RightDiv, CommentContent, StyledLink, Name, Username, CommentText, CreatedAt } from "./styles";
import ProfileImage from "../ProfileImage";

const Comment = ({ user, comment, createdAt }) => {
    return (
        <StyledComment>
            <ProfileImage image={user.profileImage} size={50} margin="0 10px 0 4px" />
            <RightDiv>
                <CommentContent>
                    <StyledLink to={`/profile/${user.username}`}>
                        <Name>{user.name}</Name>
                        <Username>{user.username}</Username>
                    </StyledLink>
                    <CommentText>{comment}</CommentText>
                </CommentContent>
                <CreatedAt>{createdAt}</CreatedAt>
            </RightDiv>
        </StyledComment>
    );
};

export default Comment;