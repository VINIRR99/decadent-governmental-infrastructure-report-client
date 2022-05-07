import { useState, useEffect } from "react";
import ProfileImage from "../../components/ProfileImage";
import { Div, Content, Button, File } from "./styles";
import reportsApi from "../../utils/reportsApi";

const Account = ({ loggedUser, setLoggedUser }) => {
    const [user, setUser] = useState();

    const [changeImage, setChangeImage] = useState(false);
    const [imageFile, setImageFile] = useState();

    useEffect(() => {
        setUser(loggedUser);
    }, [loggedUser]);

    const cancelImageChange = () => {
        setChangeImage(false);
        setImageFile();
    };

    const submitImage = async () => {
        const updatedUser = await reportsApi.uploadProfileImage(imageFile);
        setUser(await updatedUser);
        setLoggedUser(await updatedUser);
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(updatedUser));

        cancelImageChange();
    };

    return user && (
        <Div>
            <Content>
                {(user && user.profileImage) && <ProfileImage image={user.profileImage} size={350} margin="0 0 20px" />}
                {changeImage && <File type="file" onChange={e => setImageFile(e.target.files[0])} accept="image/*" />}
                {!changeImage && <Button onClick={() => setChangeImage(true)}>Edit profileImage</Button>}
                {changeImage && (
                    <div>
                        <Button onClick={submitImage}>Submit image</Button>
                        <Button onClick={cancelImageChange}>Cancel</Button>
                    </div>
                )}
            </Content>
        </Div>
    );
};

export default Account;