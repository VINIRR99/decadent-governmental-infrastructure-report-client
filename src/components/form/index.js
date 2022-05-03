import { StyledForm, Title, Input, Button } from "./styles";

const Form = ({ onSubmit, title, inputs, children }) => {
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
            {children}
            <Button>{title}</Button>
        </StyledForm>
    );
};

export default Form;