import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reportsApi from "../../utils/reportsApi";
import ReportCard from "../../components/report-card";

const Report = ({ loggedUser }) => {
    const { reportId } = useParams();
    const [report, setReport] = useState({});

    useEffect(() => {(async () => setReport(await reportsApi.getOneReport(reportId)))()}, [reportId]);

    return (Object.keys(report).length > 0) && (
        <div style={{padding: "1.53965vw 15.39646vw 0"}}>
            <ReportCard key={report._id} { ...report } loggedUser={loggedUser} />
        </div>
    );
};

export default Report;