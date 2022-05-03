import { useState } from "react";
import { Form, Title, Input, Button } from "./styles"

const Signup = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const inputs = [
        {
            type: "text",
            placeholder: "Name",
            value: name,
            onChange: e => setName(e.target.value)
        },
        {
            type: "text",
            placeholder: "Username",
            value: username,
            onChange: e => setUsername(e.target.value)
        },
        {
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: e => setPassword(e.target.value)
        },
        {
            type: "password",
            placeholder: "Verify Password",
            value: passwordConfirmation,
            onChange: e => setPasswordConfirmation(e.target.value)
        }
    ];
    return (
        <div>
            <Form>
                <Title>Sign up</Title>
                {inputs.map(input => <Input key={input.placeholder}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.onChange}
                />)}
                <Button>Sign Up</Button>
            </Form>
        </div>
    );
};

export default Signup;