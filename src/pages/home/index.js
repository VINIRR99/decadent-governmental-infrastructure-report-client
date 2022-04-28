import { useState, useEffect } from "react";
import reportsApi from "../../utils/reportsApi";
import ReportCard from "../../components/report-card";

const Home = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {(async () => setReports(await reportsApi.getAllReports()))()}, []);

    return (
        <div>
            {reports.map(report => <ReportCard key={report._id} report={report} />)}
        </div>
    );
};

export default Home;