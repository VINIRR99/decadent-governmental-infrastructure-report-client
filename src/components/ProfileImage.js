import styled from "styled-components";

const Image = styled.img`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border-radius: 50%;
    margin: ${({ margin }) => margin};
`;

const ProfileImage = ({ image, size, margin }) => <Image src={image} size={size} margin={margin} alt="profile" />

export default ProfileImage;