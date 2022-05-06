import { useState } from "react";
import { ReportCardStyled, TopDiv, LinkToReport, ReportImage, Paragraph, ShowComments, ShowCommentsButton } from "./styles";
import ProfileCard from "../profile-card";
import Fixed from "../Fixed";
import PostComment from "../post-comment";
import Comment from "../comment";

const ReportCard = ({
    user,
    createdAt,
    reportDescription,
    fixed,
    reportImage,
    comments: reportComments,
    _id,
    limitComments,
    loggedUser
}) => {
    const [comments, setComments] = useState(reportComments);

    return (
        <ReportCardStyled>
            <TopDiv>
                <ProfileCard user={user} createdAt={createdAt} />
                <div>
                    <Fixed fixedReport={fixed} loggedUser={loggedUser} reportUserId={user._id} reportId={_id} />
                </div>
            </TopDiv>
            <LinkToReport to={`/report/${_id}`}>
                <Paragraph>{reportDescription}</Paragraph>
                <ReportImage src={reportImage} alt="report" />
            </LinkToReport>
            {loggedUser && <>
                <hr />
                <PostComment reportId={_id} user={loggedUser} comments={comments} setComments={setComments} />
            </>}
            {(comments.length !== 0) && (
                <div>
                    {!loggedUser && <hr />}
                    <div>
                        <Paragraph>Comments:</Paragraph>
                        {comments.slice(0, limitComments).map(comment => <Comment key={comment._id} { ...comment } />)}
                    </div>
                    {(limitComments && (comments.length > limitComments)) && (
                        <ShowComments>
                            <ShowCommentsButton to={`/report/${_id}`}>View More Comments</ShowCommentsButton>
                        </ShowComments>
                    )}
                </div>
            )}
        </ReportCardStyled>
    );
};

export default ReportCard;