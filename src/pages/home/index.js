import { useState, useEffect } from "react";
import reportsApi from "../../utils/reportsApi";
import ReportCard from "../../components/report-card";

const Home = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {(async () => setReports(await reportsApi.getAllReports()))()}, []);
    return (
        <div style={{padding: "1.53965vw 15.39646vw 0"}}>
            {reports.map(report => <ReportCard key={report._id} limitComments={3} { ...report } />)}
        </div>
    );
};

export default Home;