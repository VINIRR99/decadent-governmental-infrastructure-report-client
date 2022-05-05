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

const Profile1 = () => {
    const { username } = useParams();
    const [user, setUser] = useState({});
    const [userReports, setUserReports] = useState([]);
    const [loggedUser, setLoggedUser] = useState();

    const [showReadingList, setShowReadingList] = useState(false);
    const [showReports, setShowReports] = useState(true);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {(async () => {
        const fetchedUser = await reportsApi.getUserByUsername(username);
        setUser(await fetchedUser);
        setUserReports(await fetchedUser.reports);
        setLoggedUser(await JSON.parse(localStorage.getItem("user")));
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
                        <ReportCard key={report._id} limitComments={3} {...report} />
                    ))}
                    {showReports && userReports.map(report => (
                        <ReportCard key={report._id} user={user} limitComments={3} {...report} />
                    ))}
                    {showComments && user.comments.map(comment => (
                        <StyledLink key={comment._id} to={`/report/${comment.report._id}`}>
                            <ReportDescription>
                                <Description>{comment.report.description}</Description>
                                <CommentContent>
                                    <Comment>{comment.comment}</Comment>
                                    <CreatedAt>{comment.createdAt}</CreatedAt>
                                </CommentContent>
                            </ReportDescription>
                        </StyledLink>
                    ))}
                    {(showReadingList && (user.readLater.length === 0)) && (
                        <EmptyMessage>{user.username} does not have any reports added to this list.</EmptyMessage>
                    )}
                    {(showReports && (user.reports.length === 0)) && (
                        <EmptyMessage>{user.username} does not posted any report yet.</EmptyMessage>
                    )}
                    {(showComments && (user.comments.length === 0)) && (
                        <EmptyMessage>{user.username} does not posted any comment yet.</EmptyMessage>
                    )}
                </div>
            </RightDiv>
        </MainDiv>
    );
};

export default Profile1;