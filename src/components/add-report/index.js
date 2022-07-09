import { useState } from "react";
import reportsApi from "../../utils/reportsApi";
import ReportForm from "../report-form";

const AddReport = ({ userReports, setUserReports }) => {
    const [showForm, setShowForm] = useState(false);
    const [imageFile, setImageFile] = useState();
    const [description, setDescription] = useState("");
    const [missingImageFile, setMissingImageFile] = useState(false);
    const [missingDescription, setMissingDescription] = useState(false);

    const handleCancelButton = () => {
        setShowForm(false);
        setImageFile();
        setDescription("");
        setMissingImageFile(false);
        setMissingDescription(false);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        setMissingImageFile(!imageFile ? true : false);
        setMissingDescription(!description ? true : false);

        if (imageFile && description) {
            const { _id } = await reportsApi.postReport({ description });
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
            description={description}
            setDescription={setDescription}
            handleCancelButton={handleCancelButton}
            missingImageFile={missingImageFile}
            missingDescription={missingDescription}
            handleSubmit={handleSubmit}
        />
    );
};

export default AddReport;