import { useState, useEffect } from "react";
import ProfileImage from "../../components/ProfileImage";
import { Div, Content, Button, File, AccountInfo } from "./styles";
import reportsApi from "../../utils/reportsApi";

const Account = ({ loggedUser, setLoggedUser }) => {
    const [user, setUser] = useState();

    const [changeImage, setChangeImage] = useState(false);
    const [imageFile, setImageFile] = useState();

    const [changeName, setChangeName] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        setUser(loggedUser);
        if (loggedUser) setName(loggedUser.name);
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

    const cancelChangeName = () => {
        setChangeName(false);
        setName(user.name);
    };

    const editName = () => {
        setName(user.name);
        setChangeName(true);
    };

    const submitName = async () => {
        setChangeName(false);
        const updatedUser = await reportsApi.updateUser({ name });
        setUser(await updatedUser);
        setLoggedUser(await updatedUser);
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(updatedUser));
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
                <AccountInfo>
                    <div>
                        <p>Name: {changeName ? <input type="text" value={name} onChange={e => setName(e.target.value)} /> : name}</p>
                        {!changeName && <button onClick={editName}>Change name</button>}
                        {changeName && <button onClick={submitName}>Submit name change</button>}
                        {changeName && <button onClick={cancelChangeName}>Cancel</button>}
                    </div>
                    <div>
                        <p>Username: {user && user.username}</p>
                        <button>Change username</button>
                    </div>
                    <div>
                        <p>Password: ********</p>
                        <button>Change password</button>
                    </div>
                </AccountInfo>
            </Content>
        </Div>
    );
};

export default Account;