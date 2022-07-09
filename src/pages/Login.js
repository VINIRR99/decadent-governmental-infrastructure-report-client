import { useState } from "react";
import reportsApi from "../utils/reportsApi";
import Form from "../components/form";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [missingUsername, setMissingUsername] = useState(false);
    const [missingPassword, setMissingPassword] = useState(false);
    const [wrongLogin, setWrongLogin] = useState(false);

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

        if (username && password) {
            const user = await reportsApi.login(username, password);
            if (!user) {
                setWrongLogin(true);
            } else {
                setWrongLogin(false);
                setUsername("");
                setPassword("");
                window.location = `/profile/${user.username}`
            };
        };
    };

    const errorMessages = [{ condition: wrongLogin, message: "*Wrong username or password!" }];
    
    return <Form onSubmit={handleSubmit} title="Login" inputs={inputs} errorMsgs={errorMessages} />;
};

export default Login;