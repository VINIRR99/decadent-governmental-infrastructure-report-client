import { StyledProfile, StyledLink, Name, Paragraph } from "./styles";
import ProfileImage from "../ProfileImage";

const ProfileCard = ({ user, createdAt }) => {
    return (
        <StyledProfile>
            <ProfileImage image={user.profileImage} size={50} margin="0 10px 0 4px" />
            <StyledLink to={`/profile/${user.username}`}>
                <Name>{user.name}</Name>
                <Paragraph>{user.username}</Paragraph>
                <Paragraph>{createdAt}</Paragraph>
            </StyledLink>
        </StyledProfile>
    );
};

export default ProfileCard;