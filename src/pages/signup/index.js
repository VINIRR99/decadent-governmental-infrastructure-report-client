import { useState } from "react";
import reportsApi from "../../utils/reportsApi";
import { Form, Title, Input, Button, ErrorMessage } from "./styles";

const Signup = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [missingName, setMissingName] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [missingUsername, setMissingUsername] = useState(false);
    const [usedUsername, setUsedUsername] = useState(false);
    const [missingPassword, setMissingPassword] = useState(false);
    const [missingPasswordConfirmation, setMissingPasswordConfirmation] = useState(false);
    const [passwordVerify, setPasswordVerify] = useState(false);

    const inputs = [
        {
            type: "text",
            placeholder: "Name",
            value: name,
            onChange: event => setName(event.target.value),
            missing: missingName,
            errorMessage: "*Name is required!"
        },
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
        },
        {
            type: "password",
            placeholder: "Verify Password",
            value: passwordConfirmation,
            onChange: event => setPasswordConfirmation(event.target.value),
            missing: missingPasswordConfirmation,
            errorMessage: "*Password verification is required!"
        }
    ];

    const onSubmit = async event => {
        event.preventDefault();

        setMissingName(!name ? true : false);
        setMissingUsername(!username ? true : false);
        setMissingPassword(!password ? true : false);
        setMissingPasswordConfirmation(!passwordConfirmation ? true : false);
        setPasswordVerify((password && passwordConfirmation && (password !== passwordConfirmation)) ? true : false);
        setInvalidName((name && !/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(name)) ? true : false);

        if (username) {
            const verifyUsername = await reportsApi.getUserByUsername(username);
            if (typeof(verifyUsername) === "string") {
                if (verifyUsername.slice(32) === "404") {
                    setUsedUsername(false);
                    if (
                        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(name) &&
                        password &&
                        passwordConfirmation &&
                        password === passwordConfirmation
                    ) {
                        const newUser = await reportsApi.signup(name, username, password, passwordConfirmation);
                        if (newUser) {
                            console.log(newUser);
                            setName("");
                            setUsername("");
                            setPassword("");
                            setPasswordConfirmation("");
                        };
                    };
                } else console.error(`Error on getUserByUsername => ${verifyUsername}`);
            } else setUsedUsername(true);
        };

        /*
        if (
            /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(name) &&
            username &&
            typeof(verifyUsername) === "string" &&
            password &&
            passwordConfirmation
        ) {
            const newUser = await reportsApi.signup(name, username, password, passwordConfirmation);
            if (typeof(newUser) === "string") {
                setUsedUsername((newUser.slice(32) === "409") ? true : false);
            } else {
                setUsedUsername(false);
                console.log(newUser);
                setName("");
                setUsername("");
                setPassword("");
                setPasswordConfirmation("");
            };
        }; */
    };
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Title>Sign up</Title>
                {inputs.map(input => <Input key={input.placeholder}
                    type={input.type}
                    placeholder={input.missing ? input.errorMessage : input.placeholder}
                    placeholderColor={input.missing ? "red" : "gray"}
                    value={input.value}
                    onChange={e => input.onChange(e)}
                />)}
                {invalidName && <ErrorMessage>*Name can only contain letters!</ErrorMessage>}
                {usedUsername && <ErrorMessage>*Username already used!</ErrorMessage>}
                {passwordVerify && <ErrorMessage>*Password verification must be equal to password!</ErrorMessage>}
                <Button>Sign Up</Button>
            </Form>
        </div>
    );
};

export default Signup;