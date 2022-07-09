import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reportsApi from "../utils/reportsApi";
import Loading from "../components/loading";
import Error from "../components/error";
import ReportForm from "../components/report-form";
import DeleteReport from "../components/delete-report";
import ReportCard from "../components/report-card";

const Div = styled.div`
    padding: 1.53965vw 15.39646vw 0;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

const Report = ({ loggedUser, setLoggedUser }) => {
    const { reportId } = useParams();
    const [report, setReport] = useState({});
    const [imageURL, setImageURL] = useState("https://res.cloudinary.com/dulbuc924/image/upload/v1657207384/report-app/maunpwjp1cspbqtwrqyv.jpg");
    const [description, setDescription] = useState("");

    useEffect(() => {(async () => {
        const fetchedReport = await reportsApi.getOneReport(reportId);

        setReport(await fetchedReport);
        setImageURL(await fetchedReport.image);
        setDescription(await fetchedReport.description);
    })()}, [reportId]);

    const [showForm, setShowForm] = useState(false);
    const [imageFile, setImageFile] = useState();
    const [descriptionForm, setDescriptionForm] = useState("");

    const handleCancelButton = () => {
        setShowForm(false);
        setImageFile();
        setDescriptionForm("");
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (imageFile || descriptionForm) {
            if (descriptionForm) {
                setDescription(descriptionForm);
                await reportsApi.updateReport(report._id, { description });
            };

            if (imageFile) {
                const { image } = await reportsApi.uploadReportImage(imageFile, report._id);
                setImageURL(image);
            };

            handleCancelButton();
        };
    };

    return (
        <Div>
            {(Object.keys(report).length === 0) && <Loading />}
            {((Object.keys(report).length > 0) && report.status) && <Error {...report} />}
            {((Object.keys(report).length > 0) && !report.status) && <>
                {(loggedUser && (loggedUser._id === report.user._id)) && (
                    <Buttons>
                        <ReportForm 
                            functionality="Update report"
                            showForm={showForm}
                            setShowForm={setShowForm}
                            setImageFile={setImageFile}
                            description={descriptionForm}
                            setDescription={setDescriptionForm}
                            handleCancelButton={handleCancelButton}
                            handleSubmit={handleSubmit}
                        />
                        <DeleteReport reportId={report._id} />
                    </Buttons>
                )}
                <ReportCard
                    key={report._id}
                    reportImage={imageURL}
                    reportDescription={description}
                    loggedUser={loggedUser}
                    setLoggedUser={setLoggedUser}
                    { ...report }
                />
            </>}
        </Div>
    );
};

export default Report;