import { useState } from "react";
import Form from "../../components/form";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [missingUsername, setMissingUsername] = useState(false);
    const [missingPassword, setMissingPassword] = useState(false);

    const inputs = [
        {
            type: "text",
            placeholder: "Username",
            value: username,
            onChange: event => setUsername(event.target.value),
            missing: missingUsername,
            errorMessage: "*Username is required!"
        },
        {
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: event => setPassword(event.target.value),
            missing: missingPassword,
            errorMessage: "*Password is required!"
        }
    ];

    const handleSubmit = async event => {
        event.preventDefault();

        setMissingUsername(!username ? true : false);
        setMissingPassword(!password ? true : false);
    };
    return (
        <Form onSubmit={handleSubmit} title="Login" inputs={inputs}></Form>
    );
};

export default Login;