import { StyledProfile, Image, Username, Paragraph } from "./styles";

const Profile = ({ user, createdAt }) => {
    return (
        <StyledProfile>
            <Image src={user.profileImage} alt="profile" />
            <div>
                <Username>{user.name}</Username>
                <Paragraph>{user.username}</Paragraph>
                <Paragraph>{createdAt}</Paragraph>
            </div>
        </StyledProfile>
    );
};

export default Profile;