import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reportsApi from "../../utils/reportsApi";

const Profile = () => {
    const { username } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {(async () => setUser(await reportsApi.getUserByUsername(username)))()}, [username]);

    return (Object.keys(user).length > 0) && (
        <h1>{user.name}</h1>
    );
};

export default Profile;