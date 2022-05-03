import { StyledForm, Title, Input, Button, ErrorMessage } from "./styles";

const Form = ({ onSubmit, title, inputs, errorMsgs }) => {
    return (
        <StyledForm onSubmit={onSubmit}>
            <Title>{title}</Title>
            {inputs.map(input => <Input key={input.placeholder}
                type={input.type}
                placeholder={input.missing ? input.errorMessage : input.placeholder}
                placeholderColor={input.missing ? "red" : "gray"}
                value={input.value}
                onChange={e => input.onChange(e)}
            />)}
            {errorMsgs.map(error => error.condition && <ErrorMessage key={error.message}>{error.message}</ErrorMessage>)}
            <Button>{title}</Button>
        </StyledForm>
    );
};

export default Form;