import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reportsApi from "../../utils/reportsApi";
import Loading from "../../components/loading";
import Error from "../../components/error";
import ReportCard from "../../components/report-card";

const SearchResults = ({ loggedUser, setLoggedUser }) => {
    const [searchParams] = useSearchParams();
    const searchResult = searchParams.get("search-result");
    const [reports, setReports] = useState([]);
    useEffect(() => {(async () => setReports(await reportsApi.getSearchResults(searchResult)))()}, [searchResult]);

    return (
        <div style={{padding: "1.53965vw 15.39646vw 0"}}>
            {(reports.length === 0) && <Loading />}
            {((reports.length > 0) && reports[0].status && !reports[0].notFound) && <Error {...reports[0]} />}
            {((reports.length > 0) && !reports[0].status && reports[0].notFound) && <h1>{reports[0].notFound}</h1>}
            {((reports.length > 0) && !reports[0].status && !reports[0].notFound) && reports.map(report => (
                <ReportCard
                    key={report._id}
                    limitComments={3}
                    reportDescription={report.description}
                    reportImage={report.image}
                    loggedUser={loggedUser}
                    setLoggedUser={setLoggedUser}
                    { ...report }
                />
            ))}
        </div>
    );
};

export default SearchResults;