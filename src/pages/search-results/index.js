import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reportsApi from "../../utils/reportsApi";
import ReportCard from "../../components/report-card";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const searchResult = searchParams.get("search-result");
    const [reports, setReports] = useState([]);
    useEffect(() => {(async () => setReports(await reportsApi.getSearchResults(searchResult)))()}, [searchResult]);
    return (
        <div style={{padding: "1.53965vw 15.39646vw 0"}}>
            {reports.map(report => <ReportCard key={report._id} { ...report } />)}
        </div>
    );
};

export default SearchResults;