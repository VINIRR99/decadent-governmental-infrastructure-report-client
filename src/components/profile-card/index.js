import { StyledProfile, Name, Paragraph } from "./styles";
import ProfileImage from "../ProfileImage";

const ProfileCard = ({ user, createdAt }) => {
    return (
        <StyledProfile>
            <ProfileImage image={user.profileImage} size={50} />
            <div>
                <Name>{user.name}</Name>
                <Paragraph>{user.username}</Paragraph>
                <Paragraph>{createdAt}</Paragraph>
            </div>
        </StyledProfile>
    );
};

export default ProfileCard;