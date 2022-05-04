import styled from "styled-components";

const Image = styled.img`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border-radius: 50%;
    margin: 0 10px 0 4px;
`;

const ProfileImage = ({ image, size }) => <Image src={image} size={size} alt="profile" />

export default ProfileImage;