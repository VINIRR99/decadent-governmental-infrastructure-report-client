import { Form, Input, Buttons, SubmitButton, CancelButton } from "./styles";

const UpdateComment = ({ comment, handleChange }) => {
    return (
        <Form>
            <Input type="text" value={comment} onChange={handleChange} />
            <Buttons>
                <SubmitButton>Edit</SubmitButton>
                <CancelButton>Cancel</CancelButton>
            </Buttons>
        </Form>
    );
};

export default UpdateComment;