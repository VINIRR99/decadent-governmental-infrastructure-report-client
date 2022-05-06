import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reportsApi from "../utils/reportsApi";
import ReportForm from "../components/report-form";
import ReportCard from "../components/report-card";

const Report = ({ loggedUser }) => {
    const { reportId } = useParams();
    const [report, setReport] = useState({});
    const [imageURL, setImageURL] = useState("https://res.cloudinary.com/dulbuc924/image/upload/v1651761945/reports/lyp8kvhuymamdlrorgsg.jpg");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {(async () => {
        const fetchedReport = await reportsApi.getOneReport(reportId);

        setReport(await fetchedReport);
        setImageURL(await fetchedReport.image);
        setLocation(await fetchedReport.location);
        setDescription(await fetchedReport.description);
    })()}, [reportId]);

    const [showForm, setShowForm] = useState(false);
    const [imageFile, setImageFile] = useState();
    const [locationForm, setLocationForm] = useState("");
    const [descriptionForm, setDescriptionForm] = useState("");

    const handleCancelButton = () => {
        setShowForm(false);
        setImageFile();
        setLocationForm("");
        setDescriptionForm("");
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (imageFile || locationForm || descriptionForm) {
            if (locationForm || descriptionForm) {
                const reportInputs = {};

                if (locationForm) {
                    reportInputs.location = locationForm;
                    setLocation(locationForm);
                };
                if (descriptionForm) {
                    reportInputs.description = descriptionForm;
                    setDescription(descriptionForm);
                };

                await reportsApi.updateReport(report._id, reportInputs);
            };

            if (imageFile) {
                const { image } = await reportsApi.uploadReportImage(imageFile, report._id);
                setImageURL(image);
            };

            handleCancelButton();
        };
    };

    return (Object.keys(report).length > 0) && (
        <div style={{padding: "1.53965vw 15.39646vw 0"}}>
            {(loggedUser && (loggedUser._id === report.user._id)) && (
                <ReportForm 
                    marginBotton="10px"
                    functionality="Update report"
                    showForm={showForm}
                    setShowForm={setShowForm}
                    setImageFile={setImageFile}
                    location={locationForm}
                    setLocation={setLocationForm}
                    description={descriptionForm}
                    setDescription={setDescriptionForm}
                    handleCancelButton={handleCancelButton}
                    missingImageFile={false}
                    missingLocation={false}
                    handleSubmit={handleSubmit}
                />
            )}
            <ReportCard
                key={report._id}
                reportImage={imageURL}
                reportDescription={description}
                loggedUser={loggedUser}
                { ...report }
            />
        </div>
    );
};

export default Report;