import { ReportCardStyled, TopDiv, ReportImage, Paragraph, ShowComments } from "./styles";
import Profile from "../profile";
import Fixed from "../Fixed";
import Comment from "../comment";

const ReportCard = ({ user, createdAt, description, fixed, image, comments }) => {
    return (
        <ReportCardStyled>
            <TopDiv>
                <Profile user={user} createdAt={createdAt} />
                <div>
                    {fixed ? <Fixed status="solved" /> : <Fixed status="unsolved" />}
                </div>
            </TopDiv>
            <Paragraph>{description}</Paragraph>
            <ReportImage src={image} alt="report" />
            {(comments.length !== 0) && (
                <div>
                    <hr />
                    <div>
                        <Paragraph>Comments:</Paragraph>
                        {comments.slice(0, 3).map(comment => <Comment key={comment._id} { ...comment } />)}
                    </div>
                    {(comments.length > 3) && (
                        <ShowComments>
                            <button>View More Comments</button>
                        </ShowComments>
                    )}
                </div>
            )}
        </ReportCardStyled>
    );
};

export default ReportCard;