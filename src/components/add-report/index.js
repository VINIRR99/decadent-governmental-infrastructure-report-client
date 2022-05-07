import { useState } from "react";
import reportsApi from "../../utils/reportsApi";
import ReportForm from "../report-form";

const AddReport = ({ userReports, setUserReports }) => {
    const [showForm, setShowForm] = useState(false);
    const [imageFile, setImageFile] = useState();
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [missingImageFile, setMissingImageFile] = useState(false);
    const [missingLocation, setMissingLocation] = useState(false);

    const handleCancelButton = () => {
        setShowForm(false);
        setImageFile();
        setLocation("");
        setDescription("");
        setMissingImageFile(false);
        setMissingLocation(false);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        setMissingImageFile(!imageFile ? true : false);
        setMissingLocation(!location ? true : false);

        if (imageFile && location) {
            const reportInputs = { location };
            if (description) reportInputs.description = description;
            const { _id } = await reportsApi.postReport(reportInputs);
            const newReport = await reportsApi.uploadReportImage(imageFile, _id);
            setUserReports([newReport, ...userReports]);

            handleCancelButton();
        };
    };

    return (
        <ReportForm
            functionality="Add new report"
            showForm={showForm}
            setShowForm={setShowForm}
            setImageFile={setImageFile}
            location={location}
            setLocation={setLocation}
            description={description}
            setDescription={setDescription}
            handleCancelButton={handleCancelButton}
            missingImageFile={missingImageFile}
            missingLocation={missingLocation}
            handleSubmit={handleSubmit}
        />
    );
};

export default AddReport;