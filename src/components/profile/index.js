import { StyledProfile, Name, Paragraph } from "./styles";
import ProfileImage from "../ProfileImage";

const Profile = ({ user, createdAt }) => {
    return (
        <StyledProfile>
            <ProfileImage image={user.profileImage} />
            <div>
                <Name>{user.name}</Name>
                <Paragraph>{user.username}</Paragraph>
                <Paragraph>{createdAt}</Paragraph>
            </div>
        </StyledProfile>
    );
};

export default Profile;