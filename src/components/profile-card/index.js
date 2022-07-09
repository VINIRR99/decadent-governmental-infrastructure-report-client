import { StyledProfile, StyledLink, Name, Paragraph } from "./styles";
import ProfileImage from "../ProfileImage";

const ProfileCard = ({ user, createdAt }) => (
    <StyledProfile>
        <ProfileImage image={user.profileImage} size={50} margin="0 10px 0 4px" />
        <StyledLink to={`/profile/${user.username}`}>
            <Name>{user.name}</Name>
            <Paragraph>{user.username}</Paragraph>
            <Paragraph>{createdAt.slice(0, 10).split("-").reverse().join("/")}</Paragraph>
        </StyledLink>
    </StyledProfile>
);

export default ProfileCard;