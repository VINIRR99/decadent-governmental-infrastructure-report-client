import { MainDiv, File, MissImg, Input, Textarea, Button, Form, SubmitButton } from "./styles";

const AddReport = ({
    marginBotton,
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
    missingLocation,
    handleSubmit
}) => {
    return (
        <MainDiv marginBotton={marginBotton}>
            {!showForm && <Button onClick={() => setShowForm(true)}>{functionality}</Button>}
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

export default AddReport;