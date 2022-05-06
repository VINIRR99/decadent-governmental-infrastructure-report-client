import { useState } from "react";
import reportsApi from "../../utils/reportsApi";
import ReportForm from "../report-form";
import { MainDiv, File, MissImg, Input, Textarea, Button, Form, SubmitButton } from "./styles";

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
            const notFixedReports = [...userReports].filter(report => !report.fixed);
            const fixedReports = [...userReports].filter(report => report.fixed);
            setUserReports([...notFixedReports, newReport, ...fixedReports]);

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

/*
import { useState } from "react";
import reportsApi from "../../utils/reportsApi";
import ReportForm from "../report-form";
import { MainDiv, File, MissImg, Input, Textarea, Button, Form, SubmitButton } from "./styles";

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
            const notFixedReports = [...userReports].filter(report => !report.fixed);
            const fixedReports = [...userReports].filter(report => report.fixed);
            setUserReports([...notFixedReports, newReport, ...fixedReports]);

            handleCancelButton();
        };
    };

    return (
        <MainDiv>
            {!showForm && <Button onClick={() => setShowForm(true)}>Add new report</Button>}
            {showForm && (
                <Form onSubmit={handleSubmit}>
                    {missingImageFile && <MissImg>*Image is required!</MissImg>}
                    <File type="file" onChange={e => setImageFile(e.target.files[0])} accept="image/*" />
                    <Input
                        type="text"
                        placeholder={missingLocation ? "*Location is required!" : "Location"}
                        placeholderColor={missingLocation ? "red" : "gray"}
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    />
                    <Textarea
                        rows="5"
                        cols="35"
                        placeholder="description..."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></Textarea>
                    <div>
                        <SubmitButton type="submit">Submit report</SubmitButton>
                        <Button onClick={handleCancelButton}>Cancel</Button>
                    </div>
                </Form>
            )}
        </MainDiv>
    );
};

export default AddReport; */