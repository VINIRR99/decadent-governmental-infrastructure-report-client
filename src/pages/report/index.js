import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reportsApi from "../../utils/reportsApi";

const Report = () => {
    const { reportId } = useParams();
    const [report, setReport] = useState({});

    useEffect(() => {(async () => setReport(await reportsApi.getOneReport(reportId)))()}, [reportId]);

    return (Object.keys(report).length > 0) && (
        <h1>{report.description}</h1>
    );
};

export default Report;