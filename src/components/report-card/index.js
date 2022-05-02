import { ReportCardStyled, ReportImage, Paragraph } from "./styles";
import Profile from "../profile";
import Fixed from "../Fixed";

const ReportCard = ({ report }) => {
    return (
        <ReportCardStyled>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Profile user={report.user} createdAt={report.createdAt} />
                <div>
                    {report.fixed ? <Fixed status="solved" /> : <Fixed status="unsolved" />}
                </div>
            </div>
            <Paragraph>{report.description}</Paragraph>
            <ReportImage src={report.image} alt="report" />
            <hr />
            <div>
                <Paragraph>Comments:</Paragraph>
                {report.comments.map(comment => (
                    <div key={comment._id}></div>
                ))}
            </div>
        </ReportCardStyled>
    );
};

export default ReportCard;