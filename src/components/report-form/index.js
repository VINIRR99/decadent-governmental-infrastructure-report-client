import { MainDiv, File, MissingMsg, Textarea, Button, Form, SubmitButton } from "./styles";

const ReportForm = ({
    functionality,
    showForm,
    setShowForm,
    setImageFile,
    location,
    setLocation,
    description,
    setDescription,
    handleCancelButton,
    missingImageFile,
    missingDescription,
    handleSubmit
}) => {
    return (
        <MainDiv>
            {!showForm && <Button onClick={() => setShowForm(true)}>{functionality}</Button>}
            {showForm && (
                <Form onSubmit={handleSubmit}>
                    {missingImageFile && <MissingMsg>*Image is required!</MissingMsg>}
                    <File type="file" onChange={e => setImageFile(e.target.files[0])} accept="image/*" />
                    {missingDescription && <MissingMsg>*Description is required!</MissingMsg>}
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

export default ReportForm;