import { StyledComment, RightDiv, CommentContent, Name, Username, CommentText, CreatedAt } from "./styles";
import ProfileImage from "../ProfileImage";

const Comment = ({ user, comment, createdAt }) => {
    return (
        <StyledComment>
            <ProfileImage image={user.profileImage} />
            <RightDiv>
                <CommentContent>
                    <Name>{user.name}</Name>
                    <Username>{user.username}</Username>
                    <CommentText>{comment}</CommentText>
                </CommentContent>
                <CreatedAt>{createdAt}</CreatedAt>
            </RightDiv>
        </StyledComment>
    );
};

export default Comment;