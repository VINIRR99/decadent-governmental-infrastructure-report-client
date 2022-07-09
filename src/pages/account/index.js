import { useState, useEffect } from "react";
import ProfileImage from "../../components/ProfileImage";
import Loading from "../../components/loading";
import { Div, Content, Button, File, AccountInfo, AccInfoButton, DeleteDiv, DeleteButton } from "./styles";
import reportsApi from "../../utils/reportsApi";

const Account = ({ loggedUser, setLoggedUser }) => {
    const [user, setUser] = useState({});

    const [changeImage, setChangeImage] = useState(false);
    const [imageFile, setImageFile] = useState();

    const [changeName, setChangeName] = useState(false);
    const [name, setName] = useState("");

    const [changeUsername, setChangeUsername] = useState(false);
    const [username, setUsername] = useState("");
    const [passwordForUsername, setPasswordForUsername] = useState("");

    const [changePassword, setChangePassword] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");

    useEffect(() => {
        if (loggedUser) {
            setUser(loggedUser);
            if (!name) setName(loggedUser.name);
            if (!username) setUsername(loggedUser.username);
        };
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
        localStorage.setItem("user", JSON.stringify(await updatedUser));

        cancelImageChange();
    };

    const cancelChangeName = () => {
        setChangeName(false);
        setName(user.name);
    };

    const handleChangeName = async () => {
        if (name !== user.name) {
            setChangeName(false);
            const updatedUser = await reportsApi.updateUser({ name });
            setUser(await updatedUser);
            setLoggedUser(await updatedUser);
            localStorage.removeItem("user");
            localStorage.setItem("user", JSON.stringify(await updatedUser));
        };
    };

    const cancelChangeUsername = () => {
        setChangeUsername(false);
        setUsername(user.username);
        setPasswordForUsername("");
    };

    const handleChangeUsername = async event => {
        event.preventDefault();

        if (username !== user.username) {
            const updatedUser = await reportsApi.updateUser({ username, password: passwordForUsername });
            if (updatedUser.errorMsg) {
                alert(updatedUser.errorMsg);
            } else {
                setChangeUsername(false);
                setUser(await updatedUser);
                setLoggedUser(await updatedUser);
                localStorage.removeItem("user");
                localStorage.setItem("user", JSON.stringify(await updatedUser));
            }
        };

        setPasswordForUsername("");
    };

    const cleanPasswords = () => {
        setOldPassword("");
        setNewPassword("");
        setNewPasswordConfirmation("");
    };

    const cancelChangePassword = () => {
        setChangePassword(false);
        cleanPasswords();
    };

    const handleSubmitPassword = async event => {
        event.preventDefault();

        if (!oldPassword) {
            alert("Your previous password is required!");
            cleanPasswords();
            return;
        };
        if (!newPassword) {
            alert("Your new Password is required!");
            cleanPasswords();
            return;
        };
        if (!newPasswordConfirmation) {
            alert("Password confirmation is required!");
            cleanPasswords();
            return;
        };
        if (newPassword !== newPasswordConfirmation) {
            alert("Password confirmation must be the same as your new password!");
            cleanPasswords();
            return
        };

        const updatedUser = await reportsApi.updateUser(
            { password: oldPassword, newPassword, newPasswordConfirmation }
        );

        if (updatedUser.errorMsg) {
            alert(updatedUser.errorMsg);
        } else {
            setChangePassword(false);
            alert("Password successfully changed!");
        };

        cleanPasswords();
    };

    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [usernameForDelete, setUsernameForDelete] = useState("");
    const [passwordForDelete, setPasswordForDelete] = useState("");

    const cancelDeleteAcc = () => {
        setShowDeleteForm(false);
        setUsernameForDelete("");
        setPasswordForDelete("");
    };

    const handleDeleteAcc = async event => {
        event.preventDefault();

        if (!usernameForDelete) {
            alert("Username is required for deleting an account!");
            setPasswordForDelete("");
            return;
        };
        if (!passwordForDelete) {
            alert("Password is required for deleting an account!");
            setUsernameForDelete("");
            return;
        };

        const deleteAcc = window.confirm("Are you sure you want to delete this account?");
        if (deleteAcc) {
            const deletedAcc = await reportsApi.deleteAccount(usernameForDelete, passwordForDelete);
            if (deletedAcc.succesMsg) {
                setLoggedUser();
                alert(deletedAcc.succesMsg);
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location = "/";
            };
            if (deletedAcc.errorMsg) {
                alert(deletedAcc.errorMsg);
                cancelDeleteAcc();
            };
        } else {
            cancelDeleteAcc();
        };
    };

    return (
        <div>
            {(Object.keys(user).length === 0) && <Loading />}
            {(Object.keys(user).length > 0) && (
                <Div>
                    <Content>
                        {(user && user.profileImage) && (
                            <ProfileImage image={user.profileImage} size={350} margin="0 0 20px" />
                        )}
                        {changeImage && (
                            <File type="file" onChange={e => setImageFile(e.target.files[0])} accept="image/*" />
                        )}
                        {!changeImage && <Button onClick={() => setChangeImage(true)}>Edit profileImage</Button>}
                        {changeImage && (
                            <div>
                                <Button onClick={submitImage}>Submit image</Button>
                                <Button onClick={cancelImageChange}>Cancel</Button>
                            </div>
                        )}
                        <AccountInfo>
                            <div>
                                <p>
                                    Name: {changeName ? (
                                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                                    ) : name}
                                </p>
                                {!changeName && (
                                    <AccInfoButton onClick={() => {setChangeName(true)}}>Change name</AccInfoButton>
                                )}
                                {changeName && (
                                    <AccInfoButton onClick={handleChangeName}>Submit name change</AccInfoButton>
                                )}
                                {changeName && <AccInfoButton onClick={cancelChangeName}>Cancel</AccInfoButton>}
                            </div>
                            <div>
                                {changeUsername ? (
                                    <form onSubmit={handleChangeUsername}>
                                        <label htmlFor="username">Username: </label>
                                        <input
                                            id="username"
                                            type="text"
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                        <label htmlFor="password">Password: </label>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="********"
                                            value={passwordForUsername}
                                            onChange={e => setPasswordForUsername(e.target.value)}
                                        />
                                        <AccInfoButton type="submit">Submit name change</AccInfoButton>
                                        <AccInfoButton onClick={cancelChangeUsername}>Cancel</AccInfoButton>
                                    </form>
                                ) : <p>Username: {username}</p>}
                                {!changeUsername && (
                                    <AccInfoButton onClick={() => {setChangeUsername(true)}}>
                                        Change username
                                    </AccInfoButton>
                                )}
                            </div>
                            <div>
                                {changePassword ? (
                                    <form onSubmit={handleSubmitPassword}>
                                        <label htmlFor="old-password">Old Password: </label>
                                        <input
                                            id="old-password"
                                            type="password"
                                            placeholder="********"
                                            value={oldPassword}
                                            onChange={e => setOldPassword(e.target.value)}
                                        />
                                        <label htmlFor="new-password">New Password: </label>
                                        <input
                                            id="new-password"
                                            type="password"
                                            placeholder="********"
                                            value={newPassword}
                                            onChange={e => setNewPassword(e.target.value)}
                                        />
                                        <label htmlFor="new-password-confirmation">New Password Confirmation: </label>
                                        <input
                                            id="new-password-confirmation"
                                            type="password"
                                            placeholder="********"
                                            value={newPasswordConfirmation}
                                            onChange={e => setNewPasswordConfirmation(e.target.value)}
                                        />
                                        <AccInfoButton type="submit">Submit Password change</AccInfoButton>
                                        <AccInfoButton onClick={cancelChangePassword}>Cancel</AccInfoButton>
                                    </form>
                                ) : <>
                                        <p>Password: ********</p>
                                        <AccInfoButton onClick={() => setChangePassword(true)}>
                                            Change password
                                        </AccInfoButton>
                                    </>}
                            </div>
                            <DeleteDiv>
                                {showDeleteForm ? (
                                    <form onSubmit={handleDeleteAcc}>
                                        <label htmlFor="username-delete">Username: </label>
                                        <input
                                            id="username-delete"
                                            type="text"
                                            value={usernameForDelete}
                                            onChange={e => setUsernameForDelete(e.target.value)}
                                        />
                                        <label htmlFor="password">Password: </label>
                                        <input
                                            id="password-delete"
                                            type="password"
                                            placeholder="********"
                                            value={passwordForDelete}
                                            onChange={e => setPasswordForDelete(e.target.value)}
                                        />
                                        <DeleteButton type="submit">Delete Account</DeleteButton>
                                        <AccInfoButton onClick={cancelDeleteAcc}>Cancel</AccInfoButton>
                                    </form>
                                ) : <DeleteButton onClick={() => setShowDeleteForm(true)}>Delete Account</DeleteButton>}
                            </DeleteDiv>
                        </AccountInfo>
                    </Content>
                </Div>
            )}
        </div>
    );
};

export default Account;