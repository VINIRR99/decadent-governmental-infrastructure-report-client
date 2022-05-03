import { Form, Title, Input, Button } from "./styles"

const Signup = () => {
    const inputs = [
        {
            type: "text",
            placeholder: "Name"
        },
        {
            type: "text",
            placeholder: "Username"
        },
        {
            type: "password",
            placeholder: "Password"
        },
        {
            type: "password",
            placeholder: "Verify Password"
        }
    ];
    return (
        <div>
            <Form>
                <Title>Sign up</Title>
                {inputs.map(input => <Input key={input.placeholder} type={input.type} placeholder={input.placeholder} />)}
                <Button>Sign Up</Button>
            </Form>
        </div>
    );
};

export default Signup;