import { useState } from "react";
import reportsApi from "../../utils/reportsApi";
import { MainDiv, Input, Textarea, Button, Form, SubmitButton } from "./styles";

const AddReport = ({ userReports, setDataToShow }) => {
    const [showForm, setShowForm] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [missingImageURL, setMissingImageURL] = useState(false);
    const [missingLocation, setMissingLocation] = useState(false);

    console.log(description);

    const handleCancelButton = () => {
        setShowForm(false);
        setImageURL("");
        setLocation("");
        setDescription("");
        setMissingImageURL(false);
        setMissingLocation(false);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        setMissingImageURL(!imageURL ? true : false);
        setMissingLocation(!location ? true : false);

        if (imageURL && location) {
            const reportInputs = { location, image: imageURL };
            if (description) reportInputs.description = description;
            const newReport = await reportsApi.postReport(reportInputs);
            const notFixedReports = [...userReports].filter(report => !report.fixed);
            const fixedReports = [...userReports].filter(report => report.fixed);
            setDataToShow([...notFixedReports, newReport, ...fixedReports]);

            handleCancelButton();
        };
    };

    return (
        <MainDiv>
            {!showForm && <Button onClick={() => setShowForm(true)}>Add new report</Button>}
            {showForm && (
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="url"
                        placeholder={missingImageURL ? "*Image URL is required!" : "Report image URL"}
                        placeholderColor={missingImageURL ? "red" : "gray"}
                        value={imageURL}
                        onChange={e => setImageURL(e.target.value)}
                    />
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

export default AddReport;