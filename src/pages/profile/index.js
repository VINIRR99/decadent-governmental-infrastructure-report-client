import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reportsApi from "../../utils/reportsApi";
import { MainDiv, LeftDiv, UserInfo, RightDiv, Buttons, Button, EmptyMessage } from "./styles";
import ProfileImage from "../../components/ProfileImage";
import AddReport from "../../components/add-report";
import ReportCard from "../../components/report-card";
import UserComment from "../../components/user-comment";

const Profile = ({ loggedUser }) => {
    const { username } = useParams();
    const [user, setUser] = useState({});
    const [userReports, setUserReports] = useState([]);
    const [comments, setComments] = useState([]);

    const [showReadingList, setShowReadingList] = useState(false);
    const [showReports, setShowReports] = useState(true);
    const [showComments, setShowComments] = useState(false);

    const [emptyComments, setEmptyComments] = useState(true);

    useEffect(() => {(async () => {
        const fetchedUser = await reportsApi.getUserByUsername(username);
        setUser(await fetchedUser);
        setUserReports(await fetchedUser.reports);
        setComments(await fetchedUser.comments);

        if (fetchedUser.comments.length !== 0) setEmptyComments(false);
    })()}, [username]);

    const seeReadingList = () => {
        setShowReadingList(true);
        setShowReports(false);
        setShowComments(false);
    };

    const seeReports = () => {
        setShowReadingList(false);
        setShowReports(true);
        setShowComments(false);
    };

    const seeComments = () => {
        setShowReadingList(false);
        setShowReports(false);
        setShowComments(true);
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
                    <Button onClick={seeReadingList} condition={showReadingList}>Reading List</Button>
                    <Button onClick={seeReports} condition={showReports}>Reports</Button>
                    <Button onClick={seeComments} condition={showComments}>Comments</Button>
                </Buttons>
                <hr />
                {(loggedUser && (loggedUser._id === user._id) && showReports) && (
                    <AddReport userReports={userReports} setUserReports={setUserReports} />
                )}
                <div style={{padding: "1.5% 8% 0"}}>
                    {showReadingList && user.readLater.map(report => (
                        <ReportCard
                            key={report._id}
                            limitComments={3}
                            reportDescription={report.description}
                            reportImage={report.image}
                            loggedUser={loggedUser}
                            {...report}
                        />
                    ))}
                    {showReports && userReports.map(report => (
                        <ReportCard
                            key={report._id}
                            user={user}
                            limitComments={3}
                            reportDescription={report.description}
                            reportImage={report.image}
                            loggedUser={loggedUser}
                            {...report}
                        />
                    ))}
                    {showComments && comments.map(comment => (
                        <UserComment
                            loggedUser={loggedUser}
                            user={user}
                            comments={comments}
                            setComments={setComments}
                            setEmptyComments={setEmptyComments}
                            {...comment}
                        />
                    ))}
                    {(showReadingList && (user.readLater.length === 0)) && (
                        <EmptyMessage>{user.username} does not have any reports added to this list.</EmptyMessage>
                    )}
                    {(showReports && (user.reports.length === 0)) && (
                        <EmptyMessage>{user.username} does not posted any report yet.</EmptyMessage>
                    )}
                    {(showComments && emptyComments) && (
                        <EmptyMessage>{user.username} does not posted any comment yet.</EmptyMessage>
                    )}
                </div>
            </RightDiv>
        </MainDiv>
    );
};

export default Profile;