import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reportsApi from "../../utils/reportsApi";
import { MainDiv, LeftDiv, UserInfo, RightDiv, Buttons, Button } from "./styles";
import ProfileImage from "../../components/ProfileImage";
import ReportCard from "../../components/report-card";
import Comment from "../../components/comment";

const Profile = () => {
    const { username } = useParams();
    const [user, setUser] = useState({});
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {(async () => {
        const fetchedUser = await reportsApi.getUserByUsername(username);
        setUser(await fetchedUser);
        setDataToShow(await fetchedUser.reports);
    })()}, [username]);

    return (Object.keys(user).length > 0) && (
        <MainDiv>
            <LeftDiv>
                <div>
                    <ProfileImage image={user.profileImage} size={300} margin={0} />
                    <UserInfo>
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                    </UserInfo>
                </div>
            </LeftDiv>
            <RightDiv>
                <Buttons>
                    <Button onClick={() => setDataToShow(user.readLater)} condition={dataToShow === user.readLater}>
                        Reading List
                    </Button>
                    <Button onClick={() => setDataToShow(user.reports)} condition={dataToShow === user.reports}>
                        Reports
                    </Button>
                    <Button onClick={() => setDataToShow(user.comments)} condition={dataToShow === user.comments}>
                        Comments
                    </Button>
                </Buttons>
                <hr />
                <div style={{padding: "1.5% 8% 0"}}>
                    {dataToShow.map(data => data.comment ?
                        <Comment user={user} comment={data.comment} createdAt={data.createdAt} /> :
                        <ReportCard key={data._id} user={data.user ? data.user : user} {...data} />
                    )}
                </div>
            </RightDiv>
        </MainDiv>
    );
};

export default Profile;