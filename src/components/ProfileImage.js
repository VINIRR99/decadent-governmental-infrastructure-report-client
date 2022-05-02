import styled from "styled-components";

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px 0 4px;
`;

const ProfileImage = ({ image }) => <Image src={image} alt="profile" />

export default ProfileImage;