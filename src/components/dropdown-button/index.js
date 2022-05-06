import ProfileImage from "../ProfileImage";
import { ArrowDownwardIcon } from "../Icons";
import { Button } from "./styles";

const DropdownButton = ({ profileImage }) => {
    return (
        <div>
            <Button>
                <ProfileImage image={profileImage} size={30} margin="0 5px 0 0" />
                <ArrowDownwardIcon />
            </Button>
        </div>
    );
};

export default DropdownButton;