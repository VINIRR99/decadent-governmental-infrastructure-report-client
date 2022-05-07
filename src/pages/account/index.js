import ProfileImage from "../../components/ProfileImage";

const Account = ({ loggedUser, setLoggedUser }) => {
    return (
        <div>
            <ProfileImage image={loggedUser.profileImage} size={60} margin="0" />
        </div>
    );
};

export default Account;