import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileImage from "../ProfileImage";
import { ArrowDownwardIcon } from "../Icons";
import { Button, DropdownList, DropdownContent } from "./styles";

const DropdownButton = ({ profileImage, username }) => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleProfile = () => {
        setShowDropdown(false);
        navigate(`/profile/${username}`);
    };

    const handleAccount = () => {
        setShowDropdown(false);
        navigate("/account");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location = "/";
    };

    return (
        <div>
            <Button onClick={() => setShowDropdown(!showDropdown)}>
                <ProfileImage image={profileImage} size={30} margin="0 5px 0 0" />
                <ArrowDownwardIcon />
            </Button>
            {showDropdown && (
                <DropdownList>
                    <DropdownContent borderWidth="1px 1px 0" onClick={handleProfile}>Profile</DropdownContent>
                    <DropdownContent borderWidth="0 1px 1px" onClick={handleAccount}>Account</DropdownContent>
                    <DropdownContent borderWidth="0 1px 1px" onClick={handleLogout}>Logout</DropdownContent>
                </DropdownList>
            )}
        </div>
    );
};

export default DropdownButton;