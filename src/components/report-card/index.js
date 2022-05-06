import { ReportCardStyled, TopDiv, LinkToReport, ReportImage, Paragraph, ShowComments, ShowCommentsButton } from "./styles";
import ProfileCard from "../profile-card";
import Fixed from "../Fixed";
import { Link } from "react-router-dom";
import Comment from "../comment";

const ReportCard = ({ user, createdAt, description, fixed, image, comments, _id, limitComments, loggedUser }) => {
    return (
        <ReportCardStyled>
            <TopDiv>
                <ProfileCard user={user} createdAt={createdAt} />
                <div>
                    <Fixed fixedReport={fixed} loggedUser={loggedUser} reportUserId={user._id} reportId={_id} />
                </div>
            </TopDiv>
            <LinkToReport to={`/report/${_id}`}>
                <Paragraph>{description}</Paragraph>
                <ReportImage src={image} alt="report" />
            </LinkToReport>
            {(comments.length !== 0) && (
                <div>
                    <hr />
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