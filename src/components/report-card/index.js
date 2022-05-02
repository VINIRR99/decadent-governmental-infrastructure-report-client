import { ReportCardStyled, TopDiv, ReportImage, Paragraph } from "./styles";
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
            <hr />
            <div>
                <Paragraph>Comments:</Paragraph>
                {comments.map(comment => <Comment key={comment._id} { ...comment } />)}
            </div>
        </ReportCardStyled>
    );
};

export default ReportCard;