import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reportsApi from "../../utils/reportsApi";
import {
    MainDiv,
    LeftDiv,
    UserInfo,
    RightDiv,
    Buttons,
    Button,
    StyledLink,
    ReportDescription,
    Description,
    CommentContent,
    Comment,
    CreatedAt,
    EmptyMessage
} from "./styles";
import ProfileImage from "../../components/ProfileImage";
import AddReport from "../../components/add-report";
import ReportCard from "../../components/report-card";

const Profile = ({ loggedUser, userIsLogged }) => {
    const { username } = useParams();
    const [user, setUser] = useState({});
    const [dataToShow, setDataToShow] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState("");

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {(async () => {
        const fetchedUser = await reportsApi.getUserByUsername(username);
        setUser(await fetchedUser);
        setDataToShow(await fetchedUser.reports);
        if (fetchedUser.reports.reports === 0) {
            setEmptyMessage(`${fetchedUser.username} does not have any reports added to this list.`);
        };
    })()}, [username]);

    const showReadLater = () => {
        setEmptyMessage("");
        setDataToShow(user.readLater);
        if (user.readLater.length === 0) {
            setEmptyMessage(`${user.username} does not have any reports added to this list.`)
        };
        if (userIsLogged) setShowButton(((loggedUser._id === user._id) && (dataToShow === user.readLater)) ? true : false);
    };

    const showReports = () => {
        setEmptyMessage("");
        setDataToShow(user.reports);
        if (user.reports.length === 0) {
            setEmptyMessage(`${user.username} does not posted any report yet.`);
        };
    };

    const showComments = () => {
        setEmptyMessage("");
        setDataToShow(user.comments);
        if (user.comments.length === 0) {
            setEmptyMessage(`${user.username} does not posted any comment yet.`);
        };
    };

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
                    <Button onClick={showReadLater} condition={dataToShow === user.readLater}>Reading List</Button>
                    <Button onClick={showReports} condition={dataToShow === user.reports}>Reports</Button>
                    <Button onClick={showComments} condition={dataToShow === user.comments}>Comments</Button>
                </Buttons>
                <hr />
                {showButton && <AddReport userReports={dataToShow} setDataToShow={setDataToShow} />}
                <div style={{padding: "1.5% 8% 0"}}>
                    {dataToShow.map(data => data.comment ? (
                            <StyledLink key={data._id} to={`/report/${data.report._id}`}>
                                <ReportDescription>
                                    <Description>{data.report.description}</Description>
                                    <CommentContent>
                                        <Comment>{data.comment}</Comment>
                                        <CreatedAt>{data.createdAt}</CreatedAt>
                                    </CommentContent>
                                </ReportDescription>
                            </StyledLink>
                        ) : <ReportCard key={data._id} user={data.user ? data.user : user} limitComments={3} {...data} />
                    )}
                    {emptyMessage && <EmptyMessage>{emptyMessage}</EmptyMessage>}
                </div>
            </RightDiv>
        </MainDiv>
    );
};

export default Profile;